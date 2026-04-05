"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type ApiResponse = {
  id?: string;
  detail?: string;
  error?: string;
  message?: string;
};

export default function AdminNewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [coverImageId, setCoverImageId] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  async function parseResponse(res: Response): Promise<ApiResponse> {
    const text = await res.text();

    try {
      return JSON.parse(text) as ApiResponse;
    } catch {
      return { error: text };
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const normalizedTitle = title.trim();
    const normalizedSlug = slug.trim().toLowerCase();
    const normalizedContent = content.trim();
    const normalizedCoverImageUrl = coverImageUrl.trim();
    const normalizedCoverImageId = coverImageId.trim();
    const normalizedPublishedAt = publishedAt.trim();
    const normalizedTags = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!normalizedTitle || !normalizedSlug || !normalizedContent) {
      alert("タイトル・slug・本文を入力してください");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: normalizedTitle,
          slug: normalizedSlug,
          content: normalizedContent,
          coverImageUrl: normalizedCoverImageUrl || undefined,
          coverImageId: normalizedCoverImageId || undefined,
          publishedAt: normalizedPublishedAt || undefined,
          tags: normalizedTags,
        }),
      });

      const data = await parseResponse(res);

      if (!res.ok) {
        console.error("API error response:", data);
        alert(data?.detail || data?.error || "保存に失敗しました");
        return;
      }

      const createdId = data?.id;

      if (!createdId) {
        alert("作成は成功しましたが、IDが取得できませんでした");
        return;
      }

      const publishRes = await fetch(`/api/admin/posts/${createdId}/publish`, {
        method: "POST",
      });

      const publishData = await parseResponse(publishRes);

      if (!publishRes.ok) {
        alert(
          publishData?.detail || publishData?.error || "公開に失敗しました",
        );
        return;
      }

      alert("作成して公開しました");
      router.push("/admin/posts");
    } catch (error) {
      console.error(error);
      alert("通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h1>新規投稿</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "16px", marginTop: "24px" }}
      >
        <div>
          <label htmlFor="title">タイトル</label>
          <br />
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label htmlFor="slug">slug</label>
          <br />
          <input
            id="slug"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="example-post"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label htmlFor="content">本文</label>
          <br />
          <textarea
            id="content"
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label htmlFor="coverImageUrl">coverImage の画像 URL</label>
          <br />
          <input
            id="coverImageUrl"
            type="url"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            placeholder="https://example.com/cover.jpg"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label htmlFor="coverImageId">coverImage の Asset ID</label>
          <br />
          <input
            id="coverImageId"
            type="text"
            value={coverImageId}
            onChange={(e) => setCoverImageId(e.target.value)}
            placeholder="既存 Asset を使う場合のみ入力"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label htmlFor="publishedAt">公開日時</label>
          <br />
          <input
            id="publishedAt"
            type="datetime-local"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label htmlFor="tags">タグ</label>
          <br />
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="coffee, stand, diary"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ width: "fit-content", padding: "10px 16px" }}
        >
          {loading ? "保存中..." : "保存"}
        </button>
      </form>
    </section>
  );
}
