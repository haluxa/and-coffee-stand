import Link from "next/link";

export default function AdminPage() {
  return (
    <nav className="admin-grid-links" aria-label="管理メニュー">
      <Link href="/admin/posts" className="admin-feature-link">
        <strong>記事一覧を見る</strong>
      </Link>
      <Link href="/admin/posts/new" className="admin-feature-link">
        <strong>新規記事を作成する</strong>
      </Link>
    </nav>
  );
}
