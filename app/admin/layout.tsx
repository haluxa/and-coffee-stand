import Link from "next/link";
import type { ReactNode } from "react";
import { isAdminAuthConfigured, isAdminAuthenticated } from "@/_lib/admin-auth";
import { logoutAction } from "./actions";
import { AdminLoginForm } from "./AdminLoginForm";
import Style from "./layout.module.css";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const authenticated = await isAdminAuthenticated();

  if (!isAdminAuthConfigured()) {
    return (
      <div className={Style.adminAuthShell}>
        <section className={Style.adminCard}>
          <h1 className={Style.adminCardTitle}>管理画面の設定が未完了です</h1>
          <p className={Style.adminCardText}>
            <code>ADMIN_PASSWORD</code> と <code>ADMIN_SESSION_SECRET</code>{" "}
            を環境変数に設定してください。
          </p>
        </section>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className={Style.adminAuthShell}>
        <section className={Style.adminCard}>
          <AdminLoginForm />
        </section>
      </div>
    );
  }

  return (
    <div className={Style.adminLayout}>
      <header className={Style.adminHeader}>
        <div className={Style.adminHeaderInner}>
          <div className={Style.adminHeaderCopy}>
            <p className={Style.adminEyebrow}>Admin Dashboard</p>
            <h1 className={Style.adminHeaderTitle}>
              and coffee stand 管理画面
            </h1>
          </div>

          <nav className={Style.adminNav} aria-label="管理画面のナビゲーション">
            <Link href="/admin">管理トップ</Link>
            <Link href="/admin/posts">記事一覧</Link>
            <Link href="/admin/posts/new">新規投稿</Link>
          </nav>

          <form action={logoutAction} className={Style.adminLogoutForm}>
            <button type="submit" className={Style.adminLogoutButton}>
              ログアウト
            </button>
          </form>
        </div>
      </header>

      <main className={Style.adminMain}>{children}</main>
    </div>
  );
}
