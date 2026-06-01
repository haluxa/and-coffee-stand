import Link from "next/link";
import type { ReactNode } from "react";
import { isAdminAuthConfigured, isAdminAuthenticated } from "@/_lib/admin-auth";
import { logoutAction } from "./actions";
import { AdminLoginForm } from "./AdminLoginForm";
import { AdminNav } from "./AdminNav";
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
            <Link href="/admin" className={Style.adminHeaderTitleLink}>
              <h1 className={Style.adminHeaderTitle}>管理画面</h1>
            </Link>
          </div>

          <AdminNav />

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
