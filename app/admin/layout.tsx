import Link from "next/link";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      <header
        style={{
          borderBottom: "1px solid #ddd",
          background: "#fff",
          padding: "16px 24px",
        }}
      >
        <nav style={{ display: "flex", gap: "16px" }}>
          <Link href="/admin">管理トップ</Link>
          <Link href="/admin/posts">記事一覧</Link>
          <Link href="/admin/posts/new">新規投稿</Link>
        </nav>
      </header>

      <main style={{ padding: "24px", maxWidth: "960px", margin: "0 auto" }}>
        {children}
      </main>
    </div>
  );
}
