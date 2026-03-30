import { getPosts } from "@/lib/contentful-posts";
import Link from "next/link";

type Post = {
  sys: { id: string };
  fields: {
    title?: { "en-US"?: string };
    slug?: { "en-US"?: string };
  };
};

export default async function AdminPostsPage() {
  const posts = (await getPosts()) as Post[];

  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <h1>記事一覧</h1>
        <Link href="/admin/posts/new">新規作成</Link>
      </div>

      <ul style={{ display: "grid", gap: "12px", marginTop: "24px" }}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <strong>{post.fields.title?.["en-US"] || "無題"}</strong>
            <div style={{ fontSize: "14px", opacity: 0.7 }}>
              {post.fields.slug?.["en-US"] || "slug 未設定"}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
