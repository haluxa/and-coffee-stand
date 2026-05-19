"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import Style from "./page.module.css";

export default function HeaderNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={Style.nav}>
      <input
        id={drawerId}
        className={Style.drawerHidden}
        type="checkbox"
        checked={isOpen}
        onChange={(event) => setIsOpen(event.target.checked)}
      />
      <label
        htmlFor={drawerId}
        className={Style.drawerOpen}
        aria-label="Toggle navigation"
      >
        <span />
      </label>
      <nav className={Style.navContent}>
        <ul className={Style.navList}>
          <li className={Style.navItem}>
            <Link href="/menu" onClick={() => setIsOpen(false)}>
              menu
            </Link>
          </li>
          <li className={Style.navItem}>
            <Link href="/view" onClick={() => setIsOpen(false)}>
              shop view
            </Link>
          </li>
          <li className={Style.navItem}>
            <Link href="/secret" onClick={() => setIsOpen(false)}>
              secret
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
