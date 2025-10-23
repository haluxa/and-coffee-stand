import {
  Hina_Mincho,
  Klee_One,
  Noto_Sans_JP,
  Fredericka_the_Great,
} from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import FadeInEffect from "@/components/fadein";
import ScrollIndicator from "@/components/ScrollIndicator";
import Map from "@/components/map";

// Hina Mincho の設定
const hina = Hina_Mincho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hina",
});

// Klee One の設定
const klee = Klee_One({
  weight: ["400", "600"], // 利用できるウェイト（太さ）
  subsets: ["latin"], // 使用する文字セット
  variable: "--font-klee", // CSS変数として登録
});

//Noto Sans Japanese の設定
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});
export const metadata: Metadata = {
  title: "And Coffee Stand",
  description: "カフェの公式サイト",
};

//Fredericka the Great の設定（未使用）
const fredericka = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredericka",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${hina.variable} ${klee.variable} ${notoSansJP.variable} ${fredericka.variable}`}
      >
        <div id="bg-video-stack" aria-hidden="true">
          <div className="bg-video-track">
            <video id="bg-video-1" autoPlay loop muted playsInline>
              <source
                src="https://dgkahiuzqbuivdrg.public.blob.vercel-storage.com/video/bg-leaves-shadow.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video id="bg-video-2" autoPlay loop muted playsInline>
              <source
                src="https://dgkahiuzqbuivdrg.public.blob.vercel-storage.com/video/bg-leaves-shadow.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video id="bg-video-3" autoPlay loop muted playsInline>
              <source
                src="https://dgkahiuzqbuivdrg.public.blob.vercel-storage.com/video/bg-leaves-shadow.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video id="bg-video-4" autoPlay loop muted playsInline>
              <source
                src="https://dgkahiuzqbuivdrg.public.blob.vercel-storage.com/video/bg-leaves-shadow.webm"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* オーバーレイは動画の直後に1つだけ */}
        <div className="bg-video-overlay" aria-hidden="true" />
        <div className="site-shell">
          <header>
            <div className="nav">
              <input
                id="drawer_input"
                className="drawer_hidden"
                type="checkbox"
              />
              <label htmlFor="drawer_input" className="drawer_open">
                <span></span>
              </label>
              <nav className="nav_content">
                <ul className="nav_list">
                  <li className="nav_item">
                    <a href="../">home</a>
                  </li>
                  <li className="nav_item">
                    <a href="/menu">menu</a>
                  </li>
                  <li className="nav_item">
                    <a href="/memory">event memory</a>
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
          {/* ページごとの中身 */}
          <main>{children}</main>
          <FadeInEffect>
            <footer>
              <h2 className="sr-only">Access</h2>
              <Map height={320} />
              <Image
                src="/img/shop-exterior.jpg"
                className="footer-image"
                alt=""
                width={2048}
                height={1367}
                quality={70}
                sizes=""
              />
              <div>
                <p>住所：福岡県北九州市小倉北区清水4-3-30</p>
                <a
                  href="https://maps.app.goo.gl/42qEgAxmi3YHQxnf7"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="info_link_map"
                >
                  Google Maps
                </a>
                <br />
                <a href="https://www.instagram.com/and_coffee_stand">
                  Instagram：
                  <span className="info_link_insta">@and_coffee_stand</span>
                </a>
              </div>
              <small>©︎and coffee stand ALL Rights Reserved.</small>
            </footer>
          </FadeInEffect>
        </div>
        <ScrollIndicator />
      </body>
    </html>
  );
}
