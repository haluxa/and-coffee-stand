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
    <section className="admin-panel">
      <div className="admin-section-heading">
        <p className="admin-eyebrow">Create Post</p>
        <h2 className="admin-section-title">新規投稿</h2>
        <p className="admin-section-text">
          必須項目を入力すると、記事を作成してそのまま公開します。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="admin-form admin-post-form">
        <div className="admin-field">
          <label htmlFor="title" className="admin-label">
            タイトル
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="admin-input"
          />
        </div>

        <div className="admin-field">
          <label htmlFor="slug" className="admin-label">
            slug
          </label>
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
            className="admin-input"
          />
        </div>

        <div className="admin-field">
          <label htmlFor="content" className="admin-label">
            本文
          </label>
          <textarea
            id="content"
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="admin-textarea"
          />
        </div>

        <div className="admin-field">
          <label htmlFor="coverImageFile" className="admin-label">
            coverImage の画像ファイル
          </label>
          <input
            id="coverImageFile"
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImageFile(e.target.files?.[0] ?? null)}
            className="admin-input admin-file-input"
          />
        </div>

        <div className="admin-field">
          <label htmlFor="publishedAt" className="admin-label">
            公開日時
          </label>
          <input
            id="publishedAt"
            type="datetime-local"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            className="admin-input"
          />
        </div>

        <div className="admin-field">
          <label htmlFor="tags" className="admin-label">
            タグ
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="coffee, stand, diary"
            className="admin-input"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="admin-primary-button"
        >
          {loading ? "保存中..." : "保存"}
        </button>
      </form>
    </section>
  );
}
