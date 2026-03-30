"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminNewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          content,
        }),
      });

      const text = await res.text();
      let data: { detail?: string; error?: string } | null = null;

      try {
        data = JSON.parse(text) as { detail?: string; error?: string };
      } catch {
        data = { error: text };
      }

      if (!res.ok) {
        console.error("API error response:", data);
        alert(data?.detail || data?.error || "保存に失敗しました");
        return;
      }

      alert("保存しました");
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
