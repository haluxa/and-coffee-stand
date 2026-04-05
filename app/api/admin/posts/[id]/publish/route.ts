import { NextRequest, NextResponse } from "next/server";
import { requireAdminApiAuth } from "@/lib/admin-auth";
import { getContentfulPlainClient } from "@/lib/contentful-management";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const unauthorizedResponse = requireAdminApiAuth(req);

  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "投稿IDが不正です" }, { status: 400 });
    }

    const client = getContentfulPlainClient();

    const entry = await client.entry.get({
      entryId: id,
    });

    const publishedEntry = await client.entry.publish(
      {
        entryId: id,
      },
      entry,
    );

    return NextResponse.json({
      message: "公開成功",
      id: publishedEntry.sys.id,
    });
  } catch (error) {
    console.error("POST /api/admin/posts/[id]/publish error:", error);

    const detail = error instanceof Error ? error.message : String(error);
    const status = detail.includes("NotFound") ? 404 : 500;

    return NextResponse.json(
      {
        error: "公開失敗",
        detail,
      },
      { status },
    );
  }
}
