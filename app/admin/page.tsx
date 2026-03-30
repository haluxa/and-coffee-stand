import Link from "next/link";

export default function AdminPage() {
  return (
    <main>
      <h1>管理画面</h1>
      <nav>
        <ul>
          <li>
            <Link href="/admin/posts">記事一覧</Link>
          </li>
          <li>
            <Link href="/admin/posts/new">新規投稿</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
