import { NextRequest, NextResponse } from "next/server";
import { requireAdminApiAuth } from "@/lib/admin-auth";
import { getContentfulPlainClient } from "@/lib/contentful-management";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getFile(formData: FormData, key: string) {
  const value = formData.get(key);
  return value instanceof File && value.size > 0 ? value : null;
}

function normalizeFileName(fileName: string) {
  return fileName.replace(/[^\w.\-]+/g, "-") || "cover-image";
}

function inferContentType(fileName: string, fallback?: string | null) {
  if (fallback?.startsWith("image/")) {
    return fallback;
  }

  const ext = fileName.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    case "gif":
      return "image/gif";
    case "avif":
      return "image/avif";
    case "svg":
      return "image/svg+xml";
    default:
      return "image/jpeg";
  }
}

async function createCoverImageAssetFromFile(file: File, title: string) {
  if (!file.type.startsWith("image/")) {
    throw new Error("画像ファイルのみアップロードできます");
  }

  const client = getContentfulPlainClient();
  const fileName = normalizeFileName(file.name || "cover-image");
  const fileContentType = file.type || inferContentType(fileName);
  const fileBuffer = await file.arrayBuffer();

  const asset = await client.asset.createFromFiles(
    {},
    {
      fields: {
        title: { "en-US": title },
        description: { "en-US": `Cover image for ${title}` },
        file: {
          "en-US": {
            file: fileBuffer,
            fileName,
            contentType: fileContentType,
          },
        },
      },
    },
  );

  const processedAsset = await client.asset.processForAllLocales({}, asset, {
    processingCheckRetries: 10,
    processingCheckWait: 1000,
  });

  const publishedAsset = await client.asset.publish(
    {
      assetId: processedAsset.sys.id,
    },
    processedAsset,
  );

  return publishedAsset.sys.id;
}

export async function POST(req: NextRequest) {
  const unauthorizedResponse = requireAdminApiAuth(req);

  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const formData = await req.formData();
    const title = getString(formData, "title");
    const slug = getString(formData, "slug");
    const content = getString(formData, "content");
    const coverImageFile = getFile(formData, "coverImageFile");
    const publishedAt = getString(formData, "publishedAt");
    const tags = getString(formData, "tags")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 },
      );
    }

    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { error: "slug は半角英数字とハイフンのみ使えます" },
        { status: 400 },
      );
    }

    if (publishedAt && Number.isNaN(Date.parse(publishedAt))) {
      return NextResponse.json(
        { error: "公開日時の形式が不正です" },
        { status: 400 },
      );
    }
    const resolvedCoverImageId = coverImageFile
      ? await createCoverImageAssetFromFile(coverImageFile, title)
      : undefined;

    const fields: Record<string, unknown> = {
      title: { "en-US": title },
      slug: { "en-US": slug },
      bodyText: { "en-US": content },
      publishedAt: {
        "en-US": publishedAt || new Date().toISOString(),
      },
      tags: { "en-US": tags },
    };

    if (resolvedCoverImageId) {
      fields.coverImage = {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: resolvedCoverImageId,
          },
        },
      };
    }

    const client = getContentfulPlainClient();
    const entry = await client.entry.create(
      {
        contentTypeId: "andCoffeeStand",
      },
      {
        fields,
      },
    );

    return NextResponse.json({
      message: "作成成功",
      id: entry.sys.id,
    });
  } catch (error) {
    console.error("POST /api/admin/posts error:", error);

    return NextResponse.json(
      {
        error: "作成失敗",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
