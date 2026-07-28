// app/layout.tsx
import {
  Hina_Mincho,
  Klee_One,
  Noto_Sans_JP,
  Fredericka_the_Great,
  DM_Serif_Display,
} from "next/font/google";
import { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./_components/HeaderNav/page";
import BackgroundVideo from "./_components/BackgroundVideo/page";
import Style from "./layout.module.css";

function getFallbackSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL;

  if (!siteUrl) return "http://localhost:3000";
  return siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
}

async function getSiteUrl() {
  const headerList = await headers();
  const forwardedProto = headerList.get("x-forwarded-proto");
  const forwardedHost = headerList.get("x-forwarded-host");
  const host = forwardedHost ?? headerList.get("host");

  if (!host) return getFallbackSiteUrl();

  const protocol =
    forwardedProto ?? (host.includes("localhost") ? "http" : "https");

  return `${protocol}://${host}`;
}

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

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getSiteUrl();
  const ogImageUrl = new URL("/ogp.jpg", siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title: "And Coffee Stand",
    description: "女性が一人でも入りやすいお店──",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: "And Coffee Stand",
      description: "女性が一人でも入りやすいお店──",
      siteName: "And Coffee Stand",
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "And Coffee Stand",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "And Coffee Stand",
      description: "女性が一人でも入りやすいお店──",
      images: [ogImageUrl],
    },
  };
}

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
