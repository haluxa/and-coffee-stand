import { NextRequest, NextResponse } from "next/server";
import { getContentfulPlainClient } from "@/lib/contentful-management";

type CreatePostRequest = {
  title?: string;
  slug?: string;
  content?: string;
  coverImageId?: string;
  publishedAt?: string;
  tags?: string[];
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CreatePostRequest;
    const title = body.title?.trim();
    const slug = body.slug?.trim();
    const content = body.content?.trim();
    const coverImageId = body.coverImageId?.trim();
    const publishedAt = body.publishedAt?.trim();
    const tags = Array.isArray(body.tags)
      ? body.tags.map((tag) => tag.trim()).filter(Boolean)
      : [];

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

    const fields: Record<string, unknown> = {
      title: { "en-US": title },
      slug: { "en-US": slug },
      bodyText: { "en-US": content },
      published_at: {
        "en-US": publishedAt || new Date().toISOString(),
      },
      tags: { "en-US": tags },
    };

    if (coverImageId) {
      fields.cover_image = {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: coverImageId,
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
