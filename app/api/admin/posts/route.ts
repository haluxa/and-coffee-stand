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
    console.log("creating entry with:", {
      title,
      slug,
      content,
    });
    const entry = await client.entry.create(
      {
        contentTypeId: "andCoffeeStand",
      },
      {
        fields: {
          title: { "en-US": title },
          slug: { "en-US": slug },
          bodyText: {
            "en-US": {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: content,
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          },
        },
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
