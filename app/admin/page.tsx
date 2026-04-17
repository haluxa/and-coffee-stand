import Link from "next/link";

export default function AdminPage() {
  return (
    <section className="admin-panel">
      <div className="admin-section-heading">
        <p className="admin-eyebrow">Overview</p>
        <h2 className="admin-section-title">管理トップ</h2>
        <p className="admin-section-text">
          投稿の確認と新規作成をここから行えます。
        </p>
      </div>

      <nav className="admin-grid-links" aria-label="管理メニュー">
        <Link href="/admin/posts" className="admin-feature-link">
          <span className="admin-feature-label">Posts</span>
          <strong>記事一覧を見る</strong>
          <p>公開中の記事や slug の確認をまとめて行えます。</p>
        </Link>
        <Link href="/admin/posts/new" className="admin-feature-link">
          <span className="admin-feature-label">Create</span>
          <strong>新規記事を作成する</strong>
          <p>本文、画像、タグ、公開日時を入力してそのまま公開できます。</p>
        </Link>
      </nav>
    </section>
  );
}
