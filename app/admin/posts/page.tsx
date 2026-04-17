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
    <section className="admin-panel">
      <div className="admin-section-header">
        <div className="admin-section-heading">
          <p className="admin-eyebrow">Posts</p>
          <h2 className="admin-section-title">記事一覧</h2>
          <p className="admin-section-text">
            登録済みの記事タイトルと slug を確認できます。
          </p>
        </div>
        <Link href="/admin/posts/new" className="admin-primary-button">
          新規作成
        </Link>
      </div>

      {posts.length ? (
        <ul className="admin-post-list">
          {posts.map((post) => (
            <li key={post.sys.id} className="admin-post-item">
              <div>
                <strong className="admin-post-title">
                  {post.fields.title?.["en-US"] || "無題"}
                </strong>
                <div className="admin-post-slug">
                  {post.fields.slug?.["en-US"] || "slug 未設定"}
                </div>
              </div>
              <span className="admin-post-badge">Contentful</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="admin-empty-state">
          <strong>記事がまだありません</strong>
          <p>最初の1件を作成して公開するとここに表示されます。</p>
        </div>
      )}
    </section>
  );
}
