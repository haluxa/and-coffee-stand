import { NextRequest, NextResponse } from "next/server";
import { getContentfulPlainClient } from "@/lib/contentful-management";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, content } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 },
      );
    }

    const client = getContentfulPlainClient();

    const entry = await client.entry.create(
      {
        contentTypeId: "blogPost", // ←ここ自分のIDに合わせる
      },
      {
        fields: {
          title: { "ja-JP": title },
          slug: { "ja-JP": slug },
          body: { "ja-JP": content },
        },
      },
    );

    return NextResponse.json({
      message: "作成成功",
      id: entry.sys.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "作成失敗" }, { status: 500 });
  }
}
