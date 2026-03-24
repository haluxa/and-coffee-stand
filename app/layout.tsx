// app/layout.tsx
import {
  Hina_Mincho,
  Klee_One,
  Noto_Sans_JP,
  Fredericka_the_Great,
  DM_Serif_Display,
} from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

const hina = Hina_Mincho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hina",
});

const klee = Klee_One({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-klee",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "And Coffee Stand",
  description: "カフェの公式サイト",
};

const fredericka = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredericka",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif", // ★ 追加：CSS変数
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`
          ${hina.variable}
          ${klee.variable}
          ${notoSansJP.variable}
          ${fredericka.variable}
          ${dmSerif.variable}   // ★ 追加
        `}
      >
        <div className="site-shell">
          <header>
            <div className="nav">
              <input
                id="drawer_input"
                className="drawer_hidden"
                type="checkbox"
              />
              <label htmlFor="drawer_input" className="drawer_open">
                <span />
              </label>
              <nav className="nav_content">
                <ul className="nav_list">
                  <li className="nav_item">
                    <a href="/menu">menu</a>
                  </li>
                  <li className="nav_item">
                    <a href="/view">shop view</a>
                  </li>
                  <li className="nav_item">
                    <a href="/secret">secret</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <div className="header_logo">
            <a href="../">
              <Image
                src="/img/header_logo.png"
                alt="and coffee stand ロゴ"
                width={1134}
                height={482}
              />
            </a>
          </div>

          {/* ここに各ページの中身がそのまま入る */}
          {children}
        </div>
      </body>
    </html>
  );
}
