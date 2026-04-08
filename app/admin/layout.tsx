import Link from "next/link";
import type { ReactNode } from "react";
import {
  isAdminAuthConfigured,
  isAdminAuthenticated,
} from "@/lib/admin-auth";
import { logoutAction } from "./actions";
import { AdminLoginForm } from "./AdminLoginForm";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const authenticated = await isAdminAuthenticated();

  if (!isAdminAuthConfigured()) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          background: "#f7f7f7",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h1 style={{ marginTop: 0 }}>管理画面の設定が未完了です</h1>
          <p style={{ marginBottom: 0, lineHeight: 1.6 }}>
            <code>ADMIN_PASSWORD</code> と <code>ADMIN_SESSION_SECRET</code>{" "}
            を環境変数に設定してください。
          </p>
        </section>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          background: "#f7f7f7",
        }}
      >
        <AdminLoginForm />
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      <header
        style={{
          borderBottom: "1px solid #ddd",
          background: "#fff",
          padding: "16px 24px",
        }}
      >
        <nav style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link href="/admin">管理トップ</Link>
          <Link href="/admin/posts">記事一覧</Link>
          <Link href="/admin/posts/new">新規投稿</Link>
          <form action={logoutAction} style={{ marginLeft: "auto" }}>
            <button
              type="submit"
              style={{
                border: "1px solid #ccc",
                background: "#fff",
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              ログアウト
            </button>
          </form>
        </nav>
      </header>

      <main style={{ padding: "24px", maxWidth: "960px", margin: "0 auto" }}>
        {children}
      </main>
    </div>
  );
}
