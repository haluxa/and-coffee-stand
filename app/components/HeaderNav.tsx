"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

export default function HeaderNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="nav">
      <input
        id={drawerId}
        className="drawer_hidden"
        type="checkbox"
        checked={isOpen}
        onChange={(event) => setIsOpen(event.target.checked)}
      />
      <label htmlFor={drawerId} className="drawer_open" aria-label="Toggle navigation">
        <span />
      </label>
      <nav className="nav_content">
        <ul className="nav_list">
          <li className="nav_item">
            <Link href="/menu" onClick={() => setIsOpen(false)}>
              menu
            </Link>
          </li>
          <li className="nav_item">
            <Link href="/view" onClick={() => setIsOpen(false)}>
              shop view
            </Link>
          </li>
          <li className="nav_item">
            <Link href="/secret" onClick={() => setIsOpen(false)}>
              secret
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
