"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./layout.module.css";

const navItems = [
  { href: "/admin/posts", label: "記事一覧" },
  { href: "/admin/posts/new", label: "新規投稿" },
] as const;

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className={Style.adminNav} aria-label="管理画面のナビゲーション">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? Style.adminNavLinkActive : Style.adminNavLink}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
