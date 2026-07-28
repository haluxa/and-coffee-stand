import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "And Coffee Stand",
  description: "女性が一人でも入りやすいお店──",
  openGraph: {
    title: "And Coffee Stand",
    description: "女性が一人でも入りやすいお店──",
    siteName: "And Coffee Stand",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg?v=share-20260728",
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
    images: ["/ogp.jpg?v=share-20260728"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SharePage() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "32px 20px",
      }}
    >
      <section
        style={{
          width: "min(640px, 100%)",
          background: "rgba(255, 255, 255, 0.88)",
          color: "#2f241c",
          border: "1px solid rgba(47, 36, 28, 0.14)",
          borderRadius: "24px",
          padding: "32px 24px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Share Link
        </p>
        <h1
          style={{
            margin: "12px 0 16px",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.1,
          }}
        >
          And Coffee Stand
        </h1>
        <p
          style={{
            margin: "0 auto 24px",
            maxWidth: "32rem",
            lineHeight: 1.8,
          }}
        >
          女性が一人でも入りやすいお店──
          <br />
          福岡県北九州市のカフェ「and coffee stand」のサイトです。
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            borderRadius: "999px",
            background: "#2f241c",
            color: "#fffaf3",
            textDecoration: "none",
          }}
        >
          サイトを見る
        </Link>
      </section>
    </main>
  );
}
