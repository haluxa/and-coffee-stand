import { getPosts } from "@/_lib/contentful-posts";
import Link from "next/link";
import { DeletePostButton } from "./DeletePostButton";

type Post = {
  sys: { id: string; publishedVersion?: number };
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
          <h2 className="admin-section-title">記事一覧</h2>
        </div>
      </div>

      {posts.length ? (
        <ul className="admin-post-list">
          {posts.map((post) => {
            const title = post.fields.title?.["en-US"] || "無題";
            const slug = post.fields.slug?.["en-US"];
            const isPublished = Boolean(post.sys.publishedVersion);
            const publicHref = slug ? `/secret/${slug}` : null;

            return (
              <li key={post.sys.id} className="admin-post-item">
                {isPublished && publicHref ? (
                  <Link href={publicHref} className="admin-post-link">
                    <strong className="admin-post-title">{title}</strong>
                    <div className="admin-post-slug">{slug}</div>
                  </Link>
                ) : (
                  <div className="admin-post-link admin-post-linkDisabled">
                    <strong className="admin-post-title">{title}</strong>
                    <div className="admin-post-slug">{slug || "slug 未設定"}</div>
                  </div>
                )}

                <div className="admin-post-actions">
                  <span className="admin-post-badge">
                    {isPublished ? "公開中" : "Draft"}
                  </span>
                  <DeletePostButton postId={post.sys.id} postTitle={title} />
                </div>
              </li>
            );
          })}
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
