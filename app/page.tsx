// app/page.tsx
import Image from "next/image";
import BeansIcon from "@/_components/ui/BeansIcon";
import FadeInEffect from "@/_components/fadein";
import ScrollIndicator from "@/_components/ScrollIndicator";
import Footer from "@/_components/Footer/page";
import TopVideo from "@/_components/TopVideo";
import ControlledAnimation from "@/_components/ControlledAnimation";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <FadeInEffect>
            <div className="top-movie-wrapper">
              <TopVideo />
            </div>
          </FadeInEffect>

          <div className="shop-info">
            <FadeInEffect>
              <span>繋がるカフェ。</span>
            </FadeInEffect>
            <FadeInEffect>
              <h1>and coffee stand</h1>
            </FadeInEffect>
            <div className="info">
              <FadeInEffect>
                <div>
                  4-3-30 Kiyomizu, <br />
                  Kokurakita-ku, <br />
                  Kitakyushu-shi, <br />
                  Fukuoka 803-0841, Japan <br />
                </div>
              </FadeInEffect>
              <FadeInEffect>
                <div className="info_link_map">
                  <a href="" rel="noopener noreferrer" target="_blank">
                    Google Maps
                  </a>
                </div>
              </FadeInEffect>
              <FadeInEffect>
                <div>-------------------------</div>
              </FadeInEffect>
              <FadeInEffect>
                <div>
                  [平日（水・木・金）]
                  <br />
                  open 11:00 last order 16:00/close 16:30
                </div>
                <div></div>
              </FadeInEffect>
              <FadeInEffect>
                <div>[土曜日]　open 11:00 last order & close 17:00</div>
              </FadeInEffect>
              <FadeInEffect>
                <div>[定休日]　月・火・日・祝 </div>
              </FadeInEffect>
              <FadeInEffect>
                <div className="asterisk">
                  ※不定休あります・ストーリーの確認お願いします
                </div>
              </FadeInEffect>
              <FadeInEffect>
                <div>-------------------------</div>
              </FadeInEffect>
              <div>
                <FadeInEffect>
                  <a href="https://www.instagram.com/and_coffee_stand">
                    insta{" "}
                    <span className="info_link_insta">@and_coffee_stand</span>
                  </a>
                </FadeInEffect>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="about-wrapper about-1">
            <FadeInEffect>
              <div className="about-image-stack about-image-stack--about-1">
                <Image
                  src="/img/home_image_1.png"
                  alt=""
                  width={3000}
                  height={2400}
                  quality={80}
                  sizes="100vw"
                />
                <ControlledAnimation
                  className="about-image-stack__overlay about-image-stack__overlay--about-1"
                  animationSrc="/img/1-1.webp"
                  firstFrameSrc="/img/1-1-first.png"
                  lastFrameSrc="/img/1-1-last.png"
                  alt=""
                  width={900}
                  height={900}
                  durationMs={7040}
                />
              </div>
            </FadeInEffect>
            <FadeInEffect>
              <h2>スペシャルなひと時を</h2>
            </FadeInEffect>
            <FadeInEffect>
              <p>
                忙しく流れる時間の中で
                <br />
                少しでも、ほっと一息
                <br />
                ゆったりと自分の為に
                <br />
                過ごしてもらいたい…
                <br />
                <br />
                そんな想いでセレクトした珈琲豆、
                <br />
                体に優しい手作りスイーツと共に
                <br />
                当店は”あなたに寄り添える場所づくり”を
                <br />
                目指しています。
              </p>
            </FadeInEffect>
          </div>
          <div className="about-wrapper about-2">
            <FadeInEffect>
              <div className="about-image-stack about-image-stack--about-2">
                <Image
                  src="/img/home_image_2.png"
                  alt=""
                  width={2400}
                  height={3400}
                  quality={80}
                  sizes="100vw"
                />
                <ControlledAnimation
                  className="about-image-stack__overlay about-image-stack__overlay--about-2"
                  animationSrc="/img/1-2.webp"
                  firstFrameSrc="/img/1-2-first.png"
                  lastFrameSrc="/img/1-2-last.png"
                  alt=""
                  width={900}
                  height={900}
                  durationMs={10000}
                />
              </div>
            </FadeInEffect>
            <FadeInEffect>
              <h2>誰かのパワースポットに</h2>
            </FadeInEffect>
            <FadeInEffect>
              <p>
                “元気を与えたい”をモットーに
                <br />
                女性一人でも入りやすい空間。
                <br />
                <br />
                何気ない会話の中で生まれる
                <br />
                心解ける温かさ
                <br />
                人との繋がりを感じられる
                <br />
                何度でも訪れたくなるような身近な場所。
                <br />
                <br />
                そんなパワースポットで
                <br />
                ありたいと思っています。
              </p>
            </FadeInEffect>
          </div>
          <div className="about-wrapper about-3">
            <FadeInEffect>
              <div className="about-image-stack about-image-stack--about-3">
                <Image
                  src="/img/home_image_3.png"
                  alt=""
                  width={3200}
                  height={2400}
                  quality={80}
                  sizes="100vw"
                />
                <ControlledAnimation
                  className="about-image-stack__overlay about-image-stack__overlay--about-3"
                  animationSrc="/img/1-3.webp"
                  firstFrameSrc="/img/1-3-first.png"
                  lastFrameSrc="/img/1-3-last.png"
                  alt=""
                  width={900}
                  height={900}
                  durationMs={4000}
                />
              </div>
            </FadeInEffect>
            <FadeInEffect>
              <h2>身体が喜ぶもの</h2>
            </FadeInEffect>
            <FadeInEffect>
              <p>
                当店ではグルテンフリーのチーズケーキや
                <br />
                米粉でつくるマフィンなど
                <br />
                手作りさせていただいてます。
                <br />
                <br />
                できる限り身体に優しい素材で
                <br />
                ここでしか味わえないものを
                <br />
                提供させていただきます。
                <br />
                <br />
                珈琲とのペアリングも考えたスイーツを
                <br />
                ぜひご賞味ください。
              </p>
            </FadeInEffect>
          </div>
          <div className="about-wrapper about-4">
            <FadeInEffect>
              <div className="about-image-stack about-image-stack--about-4">
                <Image
                  src="/img/home_image_4.png"
                  alt=""
                  width={3000}
                  height={2400}
                  quality={80}
                  sizes="100vw"
                />
                <ControlledAnimation
                  className="about-image-stack__overlay about-image-stack__overlay--about-4"
                  animationSrc="/img/1-4.webp"
                  firstFrameSrc="/img/1-4-first.png"
                  lastFrameSrc="/img/1-4-last.png"
                  alt=""
                  width={900}
                  height={900}
                  durationMs={4000}
                />
              </div>
            </FadeInEffect>
            <FadeInEffect>
              <h2>まるで紅茶な珈琲豆</h2>
            </FadeInEffect>
            <FadeInEffect>
              <p>
                当店でセレクトしている珈琲豆は
                <br />
                最もグレードの高いと言われる
                <br />
                “スペシャルティーコーヒー”を使用しております。
                <br />
                <br />
                その特徴は香り豊かで
                <br />
                珈琲なのに甘く、フルーティーな味わい。
                <br />
                そして“まるで紅茶”のように軽やかで
                <br />
                全く珈琲が飲めなかった私が味わうことができたもの。
                <br />
                それが”スペシャルティーコーヒー”です。
                <br />
                <br />
                定期的に変わるセレクトした珈琲豆を
                <br />
                一杯、一杯丁寧に豆から挽きお淹れします。
              </p>
            </FadeInEffect>
          </div>
          <div className="about-wrapper about-5">
            <FadeInEffect>
              <div className="about-image-stack about-image-stack--about-5">
                <Image
                  src="/img/home_image_5.png"
                  alt=""
                  width={3000}
                  height={2400}
                  quality={80}
                  sizes="100vw"
                />
                <ControlledAnimation
                  className="about-image-stack__overlay about-image-stack__overlay--about-5"
                  animationSrc="/img/1-5.webp"
                  firstFrameSrc="/img/1-5-first.png"
                  lastFrameSrc="/img/1-5-last.png"
                  alt=""
                  width={900}
                  height={900}
                  durationMs={4000}
                />
              </div>
            </FadeInEffect>
            <FadeInEffect>
              <h2>こだわりのセレクト</h2>
            </FadeInEffect>
            <FadeInEffect>
              <p>
                自分へのご褒美としても
                <br />
                ギフトとしても
                <br />
                喜ばれているドリップバッグ。
                <br />
                <br />
                “身体にやさしい”をテーマに
                <br />
                セレクトしたものは
                <br />
                多くの女性の方に喜んでいただいてます。
              </p>
            </FadeInEffect>
          </div>
        </section>

        <section className="marquee">
          <ul className="track">
            <li>
              <Image
                src="/img/home_image_slide_1.jpg"
                alt=""
                width={1504}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_2.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_3.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_4.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_5.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_6.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_7.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_8.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_9.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_10.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_11.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_12.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_13.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_14.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_15.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_16.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_17.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_18.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_19.jpg"
                alt=""
                width={6240}
                height={4160}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_20.jpg"
                alt=""
                width={1519}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_21.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_22.jpg"
                alt=""
                width={1000}
                height={1504}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_23.jpg"
                alt=""
                width={1519}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_1.jpg"
                alt=""
                width={1504}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_2.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_3.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_4.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_5.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_6.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_7.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_8.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_9.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_10.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_11.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_12.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_13.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_14.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_15.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_16.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_17.jpg"
                alt=""
                width={1500}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_18.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_19.jpg"
                alt=""
                width={6240}
                height={4160}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_20.jpg"
                alt=""
                width={1519}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_21.jpg"
                alt=""
                width={1000}
                height={1500}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_22.jpg"
                alt=""
                width={1000}
                height={1504}
                quality={70}
                sizes="160px"
              />
            </li>
            <li>
              <Image
                src="/img/home_image_slide_23.jpg"
                alt=""
                width={1519}
                height={1000}
                quality={70}
                sizes="360px"
              />
            </li>
          </ul>
        </section>
        <section className="footer-link">
          <ul>
            <li>
              <BeansIcon href="/menu" label="menu" bare />
            </li>
            <li>
              <BeansIcon href="/view" label="shop view" bare />
            </li>
            <li>
              <BeansIcon href="/secret" label="secret" bare />
            </li>
          </ul>
        </section>
        <ScrollIndicator />
        <Footer />
      </main>
    </>
  );
}
