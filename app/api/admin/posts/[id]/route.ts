import { NextRequest, NextResponse } from "next/server";
import { requireAdminApiAuth } from "@/lib/admin-auth";
import { getContentfulPlainClient } from "@/lib/contentful-management";

function getErrorStatus(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    typeof error.status === "number"
  ) {
    return error.status;
  }

  return null;
}

function getErrorDetail(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

export async function DELETE(
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
    let entry;

    try {
      entry = await client.entry.get({
        entryId: id,
      });
    } catch (error) {
      if (getErrorStatus(error) === 404) {
        return NextResponse.json({
          message: "すでに削除済みです",
          id,
        });
      }

      throw error;
    }

    if (entry.sys.publishedVersion) {
      await client.entry.unpublish(
        {
          entryId: id,
        },
        entry,
      );
    }

    await client.entry.delete({
      entryId: id,
    });

    return NextResponse.json({
      message: "削除成功",
      id,
    });
  } catch (error) {
    console.error("DELETE /api/admin/posts/[id] error:", error);

    const detail = getErrorDetail(error);
    const status = getErrorStatus(error) ?? (detail.includes("NotFound") ? 404 : 500);

    return NextResponse.json(
      {
        error: "削除失敗",
        detail,
      },
      { status },
    );
  }
}
