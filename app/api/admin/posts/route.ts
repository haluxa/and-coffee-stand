import { NextRequest, NextResponse } from "next/server";
import { getContentfulPlainClient } from "@/lib/contentful-management";

type CreatePostRequest = {
  title?: string;
  slug?: string;
  content?: string;
  coverImageUrl?: string;
  coverImageId?: string;
  publishedAt?: string;
  tags?: string[];
};

function parseImageUrl(value?: string) {
  if (!value) return null;

  try {
    const url = new URL(value);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    return url;
  } catch {
    return null;
  }
}

function getFileNameFromUrl(url: URL) {
  const raw = url.pathname.split("/").pop() || "cover-image";

  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
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

async function createCoverImageAsset(imageUrl: URL, title: string) {
  const client = getContentfulPlainClient();
  const fileName = getFileNameFromUrl(imageUrl);

  let detectedContentType: string | null = null;

  try {
    const response = await fetch(imageUrl, {
      method: "HEAD",
      cache: "no-store",
    });

    detectedContentType = response.headers.get("content-type");
  } catch (error) {
    console.warn("coverImage HEAD request failed:", error);
  }

  const asset = await client.asset.create(
    {},
    {
      fields: {
        title: { "en-US": title },
        description: { "en-US": `Cover image for ${title}` },
        file: {
          "en-US": {
            fileName,
            contentType: inferContentType(fileName, detectedContentType),
            upload: imageUrl.toString(),
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
  try {
    const body = (await req.json()) as CreatePostRequest;
    const title = body.title?.trim();
    const slug = body.slug?.trim();
    const content = body.content?.trim();
    const coverImageUrlValue = body.coverImageUrl?.trim();
    const coverImageId = body.coverImageId?.trim();
    const publishedAt = body.publishedAt?.trim();
    const tags = Array.isArray(body.tags)
      ? body.tags.map((tag) => tag.trim()).filter(Boolean)
      : [];
    const coverImageUrl = parseImageUrl(coverImageUrlValue);

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

    if (coverImageUrlValue && !coverImageUrl) {
      return NextResponse.json(
        { error: "coverImage の URL は http または https で入力してください" },
        { status: 400 },
      );
    }

    const resolvedCoverImageId =
      coverImageUrl && !coverImageId
        ? await createCoverImageAsset(coverImageUrl, title)
        : coverImageId;

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
