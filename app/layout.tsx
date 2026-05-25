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
import Link from "next/link";
import HeaderNav from "./_components/HeaderNav/page";
import BackgroundVideo from "./_components/BackgroundVideo";
import Style from "./layout.module.css";

const hina = Hina_Mincho({
  weight: "400",
  variable: "--font-hina",
  display: "swap",
  preload: false,
  fallback: ["Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", "serif"],
});

const klee = Klee_One({
  weight: ["400", "600"],
  variable: "--font-klee",
  display: "swap",
  preload: false,
  fallback: ["Hiragino Sans", "Yu Gothic", "Meiryo", "sans-serif"],
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
  fallback: ["Hiragino Sans", "Yu Gothic", "Meiryo", "sans-serif"],
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
          ${dmSerif.variable}  
        `}
      >
        <div>
          <BackgroundVideo />

          <header>
            <HeaderNav />
          </header>

          <div className={Style.headerLogo}>
            <Link href="/">
              <Image
                src="/img/header_logo.png"
                alt="and coffee stand ロゴ"
                width={1134}
                height={482}
              />
            </Link>
          </div>

          {/* ここに各ページの中身がそのまま入る */}
          {children}
        </div>
      </body>
    </html>
  );
}
