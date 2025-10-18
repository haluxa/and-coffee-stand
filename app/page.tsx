import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
      <div className="top-movie-wrapper">
        <video
          className="top-movie"
          src="https://dgkahiuzqbuivdrg.public.blob.vercel-storage.com/video/sample1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="shop-info">
        <span>繋がるカフェ。</span>
        <h1>and coffee stand</h1>
        <div className="info">
            <div>
              4-3-30 Kiyomizu, <br />
              Kokurakita-ku, <br />
              Kitakyushu-shi, <br />
              Fukuoka 803-0841, Japan <br />
            </div>
            <div className="info_link_map">
                <a href="https://maps.app.goo.gl/42qEgAxmi3YHQxnf7" rel="noopener noreferrer" target="_blank">Google Maps</a>
            </div>
            <div>
                open 11:00<br />
                last order 16:00
            </div>
            <div>
                日・月・火・祝 定休日
            </div>
            <div>
                <a href="https://www.instagram.com/and_coffee_stand">insta @and_coffee_stand</a>
                <div className="asterisk">※不定休あります・ストーリーの確認お願いします</div>
            </div>
        </div>
      </div>
      </section>
      <section>
        <div className="about-wrapper about-1">
          <Image src="/img/home_image_main_1.png" alt="" width={3000} height={2400} />
          <h2>“スペシャルなひと時を”</h2>
          <p>
            忙しく流れる時間の中で<br />
            少しでも、ほっと一息<br />
            ゆったりと自分の為に<br />
            過ごしてもらいたい…<br /><br />

            そんな想いでセレクトした珈琲豆、<br />
            体に優しい手作りスイーツと共に<br />
            当店は”あなたに寄り添える場所づくり”を<br />
            目指しています。
          </p>
          <button>MENU</button>
        </div>
        <div className="about-wrapper about-2">
          <Image src="/img/home_image_main_2.png" alt="" width={2400} height={3400} />
          <h2>“誰かのパワースポットに”</h2>
            <p>
              “元気を与えたい”をモットーに<br />
              女性一人でも入りやすい空間。<br /><br />

              何気ない会話の中で生まれる<br />
              心解ける温かさ<br />
              人との繋がりを感じられる<br />
              何度でも訪れたくなるような身近な場所。<br /><br />

              そんなパワースポットで<br />
              ありたいと思っています。
            </p>
            <button>shop view</button>
        </div>
        <div className="about-wrapper about-3">
          <Image src="/img/home_image_main_3.png" alt="" width={3200} height={2400} />
          <h2>“身体が喜ぶもの”</h2>
            <p>
              当店ではグルテンフリーのチーズケーキや<br />
              米粉でつくるマフィンなど<br />
              手作りさせていただいてます。<br /><br />

              できる限り身体に優しい素材で<br />
              ここでしか味わえないものを<br />
              提供させていただきます。<br /><br />

              珈琲とのペアリングも考えたスイーツを<br />
              ぜひご賞味ください。
            </p>
            <button>event memory</button>
        </div>
        <div className="about-wrapper about-4">
          <Image src="/img/home_image_main_4.png" alt="" width={3000} height={2400} />
          <h2>“まるで紅茶な珈琲豆”</h2>
            <p>
              当店でセレクトしている珈琲豆は<br />
              最もグレードの高いと言われる<br />
              “スペシャルティーコーヒー”を使用しております。<br/><br/>

              その特徴は香り豊かで<br />
              珈琲なのに甘く、フルーティーな味わい。<br />
              そして“まるで紅茶”のように軽やかで<br />
              全く珈琲が飲めなかった私が味わうことができたもの。<br />
              それが”スペシャルティーコーヒー”です。<br /><br />

              定期的に変わるセレクトした珈琲豆を<br />
              一杯、一杯丁寧に豆から挽きお淹れします。
            </p>
            <button>secret</button>
        </div>
        <div className="about-wrapper about-5">
          <Image src="/img/home_image_main_5.png" alt="" width={3000} height={2400} />
          <h2>“こだわりのセレクト”</h2>
            <p>
              自分へのご褒美としても<br/>
              ギフトとしても<br/>
              喜ばれているドリップバッグ。<br /><br/>
              “身体にやさしい”をテーマに<br/>
              セレクトしたものは<br />
              多くの女性の方に喜んでいただいてます。
            </p>
            <button>original goods</button>
        </div>
      </section>
      <section className="marquee">
        <ul className="track">
        <li><Image src="/img/home_image_slide_1.jpg" alt="" width={1504} height={1000}/></li>
        <li><Image src="/img/home_image_slide_2.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_3.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_4.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_5.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_6.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_7.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_8.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_9.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_10.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_11.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_12.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_13.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_14.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_15.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_16.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_17.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_18.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_19.jpg" alt="" width={6240} height={4160}/></li>
        <li><Image src="/img/home_image_slide_20.jpg" alt="" width={1519} height={1000}/></li>
        <li><Image src="/img/home_image_slide_21.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_22.jpg" alt="" width={1000} height={1504}/></li>
        <li><Image src="/img/home_image_slide_23.jpg" alt="" width={1519} height={1000}/></li>
        <li><Image src="/img/home_image_slide_1.jpg" alt="" width={1504} height={1000}/></li>
        <li><Image src="/img/home_image_slide_2.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_3.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_4.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_5.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_6.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_7.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_8.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_9.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_10.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_11.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_12.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_13.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_14.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_15.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_16.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_17.jpg" alt="" width={1500} height={1000}/></li>
        <li><Image src="/img/home_image_slide_18.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_19.jpg" alt="" width={6240} height={4160}/></li>
        <li><Image src="/img/home_image_slide_20.jpg" alt="" width={1519} height={1000}/></li>
        <li><Image src="/img/home_image_slide_21.jpg" alt="" width={1000} height={1500}/></li>
        <li><Image src="/img/home_image_slide_22.jpg" alt="" width={1000} height={1504}/></li>
        <li><Image src="/img/home_image_slide_23.jpg" alt="" width={1519} height={1000}/></li>
        </ul>
      </section>
      <section className="footer-link">
        <ul>
          <li><Link href="/menu">menu</Link></li>
          <li><Link href="/goods">original goods</Link></li>
          <li><Link href="/memory">event memory</Link></li>
          <li><Link href="/view">shop view</Link></li>
          <li><Link href="/secret">secret</Link></li>
        </ul>
      </section>
    </main>
    
  );
}
