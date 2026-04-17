"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type DeletePostButtonProps = {
  postId: string;
  postTitle: string;
};

type ApiResponse = {
  detail?: string;
  error?: string;
  message?: string;
};

export function DeletePostButton({ postId, postTitle }: DeletePostButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `「${postTitle || "無題"}」を削除します。元に戻せません。`,
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/admin/posts/${postId}`, {
        method: "DELETE",
      });

      const data = (await res.json().catch(() => null)) as ApiResponse | null;

      if (!res.ok) {
        if (res.status === 404) {
          router.refresh();
          alert("この記事はすでに削除されています。一覧を更新しました。");
          return;
        }

        alert(data?.detail || data?.error || "削除に失敗しました");
        return;
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="admin-danger-button"
    >
      {loading ? "削除中..." : "削除"}
    </button>
  );
}
