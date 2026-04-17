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
      <div className="admin-auth-shell">
        <section className="admin-card">
          <h1 className="admin-card-title">管理画面の設定が未完了です</h1>
          <p className="admin-card-text">
            <code>ADMIN_PASSWORD</code> と <code>ADMIN_SESSION_SECRET</code>{" "}
            を環境変数に設定してください。
          </p>
        </section>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="admin-auth-shell">
        <AdminLoginForm />
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-header-copy">
            <p className="admin-eyebrow">Admin Dashboard</p>
            <h1 className="admin-header-title">and coffee stand 管理画面</h1>
          </div>

          <nav className="admin-nav">
            <Link href="/admin">管理トップ</Link>
            <Link href="/admin/posts">記事一覧</Link>
            <Link href="/admin/posts/new">新規投稿</Link>
          </nav>

          <form action={logoutAction} className="admin-logout-form">
            <button type="submit" className="admin-logout-button">
              ログアウト
            </button>
          </form>
        </div>
      </header>

      <main className="admin-main">{children}</main>
    </div>
  );
}
