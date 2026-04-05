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
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
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
      const formData = new FormData();
      formData.set("title", normalizedTitle);
      formData.set("slug", normalizedSlug);
      formData.set("content", normalizedContent);

      if (coverImageFile) {
        formData.set("coverImageFile", coverImageFile);
      }

      if (normalizedPublishedAt) {
        formData.set("publishedAt", normalizedPublishedAt);
      }

      if (normalizedTags.length) {
        formData.set("tags", normalizedTags.join(","));
      }

      const res = await fetch("/api/admin/posts", {
        method: "POST",
        body: formData,
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
          <label htmlFor="coverImageFile">coverImage の画像ファイル</label>
          <br />
          <input
            id="coverImageFile"
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImageFile(e.target.files?.[0] ?? null)}
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
