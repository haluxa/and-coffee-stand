"use client";

import Image from "next/image";

export default function MenuPage() {
  return (
    <main className="menu_page">
      <div className="menu">
        <h1>Menu</h1>
        <nav>
          <h2>Drink</h2>
          <ul>
            <li>
              <a href="#coffee">コーヒー(ice/hot)</a>
            </li>
            <li>
              <a href="#latte">ラテ(ice/hot)</a>
            </li>
            <li>
              <a href="#maple-latte">メープルラテ</a>
            </li>
            <li>
              <a href="#espresso-tonic">エスプレッソトニック</a>
            </li>
            <li>
              <a href="#chai">チャイ(ice/hot)</a>
            </li>
            <li>
              <a href="#dark-mocha">ダークモカ</a>
            </li>
            <li>
              <a href="#special-drink">気まぐれドリンク</a>
            </li>
            <ul>
              <li>
                <a href="#shiso-soda">紫蘇ソーダ</a>
              </li>
              <li>
                <a href="#coffee-lemon soda">コーヒー檸檬ソーダ</a>
              </li>
              <li>
                <a href="#matcha-drink">抹茶ドリンク</a>
              </li>
              <li>
                <a href="#hojicha-latte">ほうじ茶ラテ</a>
              </li>
              <li>
                <a href="#panna-cotta">桃とジュレジャムのパンナコッタ</a>
              </li>
            </ul>
          </ul>
          <h2>Sweets</h2>
          <ul>
            <li>
              <a href="#Burnt-Basque-Cheesecake">バスクチーズケーキ（gf）</a>
            </li>
            <li>
              <a href="#Seasonal-Sweets">気まぐれスイーツ</a>
            </li>
            <ul>
              <li>
                <a href="#Zenzai-Affogato">ぜんざいアフォガード（gf）</a>
              </li>
              <li>
                <a href="#Chocolate-Mousse-Cake">チョコムースケーキ（gf）</a>
              </li>
              <li>
                <a href="#Baked-Sweet-Potato-Brulee-Basque">
                  焼き芋ブリュレバスク（gf）
                </a>
              </li>
              <li>
                <a href="#Pumpkin-Basque">カボチャのバスク（gf）</a>
              </li>
              <li>
                <a href="#Lemon-Basque">檸檬バスク</a>
              </li>
              <li>
                <a href="#Lemon-Jelly">檸檬ゼリー</a>
              </li>
              <li>
                <a href="#Tea-Basque">紅茶のバスク</a>
              </li>
              <li>
                <a href="#Tiramisu-style-Basque">ティラミス風バスク</a>
              </li>
              <li>
                <a href="#Blueberry-and-Rice-Flour-Crumble-Cheesecake">
                  ブルーベリーと米粉のクランブルチーズケーキ（gf）
                </a>
              </li>
              <li>
                <a href="#Brown-Sugar-Brulee-Baked-Cheesecake">
                  黒糖ブリュレベイクドチーズケーキ（gf）
                </a>
              </li>
            </ul>
            <li>
              <a href="#Rice-Flour-Muffin">米粉マフィン（gf）</a>
            </li>
            <ul>
              <li>
                <a href="#Ginger">米粉のジンジャーナッツマフィン</a>
              </li>
              <li>
                <a href="#Kinkan">米粉金柑とクリチのマフィン</a>
              </li>
              <li>
                <a href="#Choco-Banana-Muffin">チョコバナナマフィン</a>
              </li>
              <li>
                <a href="#Blueberry-and-Cream-Cheese-Muffin">
                  ブルーベリーとクリチのマフィン
                </a>
              </li>
              <li>
                <a href="#Matcha-Muffin">こし餡とクリチの抹茶マフィン</a>
              </li>
            </ul>
          </ul>
        </nav>
        <section className="menu-drink">
          <h2>Drink</h2>
          <article id="coffee">
            <div className="coffee_ice_wrap">
              <svg
                viewBox="0 0 186 143"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <defs>
                  <clipPath id="coffee_ice_Blob">
                    <path d="M15.6616 113.915C-0.29516 151.518 53.6089 142.695 74.5654 138.538C93.5124 134.78 133.497 146.135 148.999 121.021C168.376 89.6296 164.07 105.541 180.433 75.4389C196.797 45.3371 170.099 19.5356 148.999 5.34475C127.899 -8.84607 105.938 12.6551 86.5608 12.6551C32.9084 12.6551 7.3319 24.6959 2.74317 38.6604C-10.758 79.7477 42.2076 51.3574 15.6616 113.915Z" />
                  </clipPath>
                </defs>
                <image
                  href="/img/menu_image_coffee(ice).jpg"
                  width="186"
                  height="143"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#coffee_ice_Blob)"
                />
              </svg>
            </div>
            <h3>コーヒー(ice/hot)</h3>
            <p>
              珈琲豆はグレードの最も高いと言われる
              <br />
              “スペシャルティーコーヒー”を使用しております。
            </p>
          </article>
          <article id="latte">
            <div className="latte_hot_wrap">
              <svg
                viewBox="0 0 264 185"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <defs>
                  <clipPath id="latte_hot_Blob">
                    <path d="M106.275 2.62795C47.6276 -4.00376 29.0244 18.4177 27.0537 30.4574C-18.4691 30.4574 5.77029 94.4061 12.2735 134.67C18.7768 174.934 77.3061 185 129.923 185C182.541 185 210.919 154.21 228.063 157.763C245.208 161.315 261.171 117.499 263.536 84.3401C265.901 51.1815 259.989 11.5097 228.063 2.62795C196.138 -6.25377 179.585 10.9176 106.275 2.62795Z" />
                  </clipPath>
                </defs>
                <image
                  href="/img/menu_image_latte(hot).jpg"
                  width="264"
                  height="185"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#latte_hot_Blob)"
                />
              </svg>
            </div>
            <h3>ラテ(hot)</h3>
            <p>
              濃厚なエスプレッソとミルクが溶け合うラテは
              <br />
              なめらかな口当たりとアロマのような香り豊かな一杯。
              <br />
              当店のラテは苦味の少ない豆を使用してるので
              お砂糖を入れなくても飲みやすく女性に好評です。
              <br />
            </p>
            <div className="latte_ice_wrap">
              <Image
                src="/img/menu_image_latte(ice).jpg"
                alt="アイスラテの写真"
                width={6240}
                height={4160}
              />
            </div>
            <h3 className="h3_right">ラテ(ice)</h3>
          </article>
          <article id="maple-latte">
            <div className="maple-latte_wrap">
              <svg
                viewBox="0 0 212 300"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <defs>
                  <clipPath id="maple-latte_Blob">
                    <path d="M22.1456 65.8761C-45.1962 187.565 68.3999 256.246 7.18038 274.603C77.9231 333.754 228.25 274.374 210.566 249.447C174.514 198.63 199.002 209.643 199.002 159.01C199.002 137.253 156.148 127.096 190.839 104.805C238.454 74.2096 160.229 58.5718 156.148 47.6936C184.037 36.6291 122.137 -25.9208 45.2727 12.1529C18.064 12.1529 -9.82506 47.6936 22.1456 65.8761Z" />
                  </clipPath>
                </defs>
                <image
                  href="/img/menu_image_maple-latte.jpg"
                  width="212"
                  height="300"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#maple-latte_Blob)"
                />
              </svg>
            </div>
            <h3>メープルラテ</h3>
            <p>
              生キャラメルの様なリッチな味わいのメープルラテ
              <br />
              甘さ控えめなので最後まで楽しめます
            </p>
          </article>
          <article id="espresso-tonic">
            <div className="espresso-tonic_wrap">
              <svg
                viewBox="0 0 200 140"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <defs>
                  <clipPath id="espresso-tonic_Blob">
                    <path d="M191.757 106.363C172.633 147.991 95.0741 150.64 57.534 116.203C13.336 140.423 6.53627 114.436 8.66117 98.4158C-6.44928 69.7806 -12.5171 10.2395 84.0954 1.157C204.861 -10.1962 210.881 64.7348 191.757 106.363Z" />
                  </clipPath>
                </defs>
                <image
                  href="/img/menu_image_espresso-tonic.jpg"
                  width="200"
                  height="140"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#espresso-tonic_Blob)"
                />
              </svg>
            </div>
            <h3>エスプレッソトニック</h3>
            <span>※春夏限定</span>
            <p>
              エスプレッソとトニックウォーターを割った
              <br />
              新感覚のアレンジコーヒードリンク
              <br />
              柑橘系のグレープフルーツやジントニック系のお酒を思わせるような一杯。
            </p>
          </article>
          <article id="chai">
            <div className="chai_hot_wrap">
              <div className="chai_hot_img">
                <Image
                  src="/img/menu_image_chai(hot).jpg"
                  alt="チャイ(hot)の写真"
                  width={6240}
                  height={4160}
                />
              </div>
            </div>
            <h3>チャイ(hot)</h3>
            <span>カフェインが気になる日の冒険</span>
            <p>
              チャイはスパイスを使用したインド式のミルクティー
              <br />
              材料は全て天然素材で身体に優しく
              <br />
              カルダモン・シナモン・生姜などのスパイスで
              <br />
              リラックス効果をもたらす一杯です
              <br />
            </p>
            <div className="chai_ice_wrap">
              <div className="chai_ice_img">
                <Image
                  src="/img/menu_image_chai(ice).jpg"
                  alt="チャイ(ice)の写真"
                  width={6240}
                  height={4160}
                />
              </div>
            </div>
            <h3>チャイ(ice)</h3>
            <p>
              当店のチャイはデカフェなので90%以上カフェインが
              <br />
              除去されたものです ノーマルのチャイソイラテに
              <br />
              蜂蜜やココアを足したメニューも！ 写真はココアバージョンです
            </p>
          </article>
          <article id="dark-mocha">
            <div className="dark-mocha_wrap">
              <div className="dark-mocha_img">
                <Image
                  src="/img/menu_image_dark-mocha.jpg"
                  alt="ダークモカの写真"
                  width={4000}
                  height={6016}
                />
              </div>
            </div>
            <h3>ダークモカ</h3>
            <p>
              ダークチョコレートのほろ苦さとミルク、
              <br />
              コーヒーがマッチしたスイーツ系ドリンク
            </p>
          </article>
          <article id="special-drink">
            <h3>気まぐれドリンク</h3>
            <p>季節ごとに変わるスペシャルドリンク</p>
            <p>
              旬なものを使用した様々なドリンクが
              <br />
              期間限定で登場することも。
              <br />
              その時にしか味わえないもので常連様にも喜んでいただいてます。
            </p>
            <article id="shiso-soda">
              <div className="shiso-soda_wrap">
                <div className="shiso-soda_img">
                  <Image
                    src="/img/menu_image_shiso-soda.jpg"
                    alt="紫蘇ソーダの写真"
                    width={4160}
                    height={6240}
                  />
                </div>
              </div>
              <h4>紫蘇ソーダ</h4>
            </article>
            <article id="coffee-lemon soda">
              <div className="coffee-lemon-soda_wrap">
                <div className="coffee-lemon-soda_img">
                  <Image
                    src="/img/menu_image_coffee-lemon-soda.jpg"
                    alt="コーヒー檸檬ソーダの写真"
                    width={6240}
                    height={4160}
                  />
                </div>
              </div>
              <h4>コーヒー檸檬ソーダ</h4>
            </article>
            <article id="matcha-drink">
              <div className="matcha-drink_wrap">
                <div className="matcha-drink_img">
                  <Image
                    src="/img/menu_image_matcha-drink.jpg"
                    alt="抹茶ドリンクの写真"
                    width={4160}
                    height={6240}
                  />
                </div>
              </div>
              <h4>抹茶ドリンク</h4>
            </article>
            <article id="hojicha-latte">
              <div className="hojicha-latte_wrap">
                <div className="hojicha-latte_img">
                  <Image
                    src="/img/menu_image_hojicha-latte.jpg"
                    alt="ほうじ茶ラテの写真"
                    width={4160}
                    height={6240}
                  />
                </div>
              </div>
              <h4>ほうじ茶ラテ</h4>
            </article>
            <article id="panna-cotta">
              <div className="panna-cotta_wrap">
                <div className="panna-cotta_img">
                  <Image
                    src="/img/menu_image_panna-cotta.jpg"
                    alt="桃とジュレジャムのパンナコッタの写真"
                    width={4160}
                    height={6240}
                  />
                </div>
              </div>
              <h4>桃とジュレジャムのパンナコッタ</h4>
            </article>
          </article>
        </section>
        <section className="menu-sweets">
          <h2>Sweets</h2>
          <article id="Burnt-Basque-Cheesecake">
            <div className="Burnt-Basque-Cheesecake_wrap">
              <div className="Burnt-Basque-Cheesecake_img">
                <Image
                  src="/img/menu_image_Burnt-Basque-Cheesecake.jpg"
                  alt="バスクチーズケーキ（gf）の写真"
                  width={6016}
                  height={4000}
                />
              </div>
            </div>
            <h3>バスクチーズケーキ（gf）</h3>
            <p>
              定番のバスクは何度でも食べたくなる
              <br />
              “simple is the best!!”
              <br />
              でありながら
              <br />
              濃厚で滑らかな口溶けにこだわりました
              <br />
              グルテンフリーなのも嬉しいポイント♪
              <br />
              迷ったらまずはぜひこちらを！
              <br />
              お好みでソルトをつけてお召し上がりくださいませ
            </p>
          </article>
          <article id="Seasonal-Sweets">
            <h3>気まぐれスイーツ</h3>
            <p>
              当店は定番バスクチーズケーキ以外にも
              <br />
              何度来ても楽しめる様に
              <br />
              季節に合わせたスイーツが登場いたします！
              <br />
              “今年も食べれるー！”と
              <br />
              毎年の楽しみにしていただいてるスイーツから新作まで。
              <br />
              可能な限りグルテンフリーを意識し甘さ控えめに
              <br />
              手作りさせていただいております。
              <br />
            </p>
          </article>
          <article id="Zenzai-Affogato">
            <div className="Zenzai-Affogato_wrap">
              <div className="Zenzai-Affogato_img">
                <Image
                  src="/img/menu_image_Zenzai-Affogato.jpg"
                  alt="ぜんざいアフォガード（gf）の写真"
                  width={770}
                  height={506}
                />
              </div>
            </div>
            <h3>ぜんざいアフォガード（gf）</h3>
          </article>
          <article id="Chocolate-Mousse-Cake">
            <div className="Chocolate-Mousse-Cake_wrap">
              <div className="Chocolate-Mousse-Cake_img">
                <Image
                  src="/img/menu_image_Chocolate-Mousse-Cake.jpg"
                  alt="チョコムースケーキ（gf）の写真"
                  width={6240}
                  height={4160}
                />
              </div>
            </div>
            <h3>チョコムースケーキ（gf）</h3>
          </article>
          <article id="Baked-Sweet-Potato-Brulee-Basque">
            <div className="Baked-Sweet-Potato-Brulee-Basque_wrap">
              <div className="Baked-Sweet-Potato-Brulee-Basque_img">
                <Image
                  src="/img/menu_image_Baked-Sweet-Potato-Brulee-Basque.jpg"
                  alt="焼き芋ブリュレバスク（gf）の写真"
                  width={6016}
                  height={4000}
                />
              </div>
            </div>
            <h3>焼き芋ブリュレバスク（gf）</h3>
          </article>
          <article id="Pumpkin-Basque">
            <div className="Pumpkin-Basque_wrap">
              <div className="Pumpkin-Basque_img">
                <Image
                  src="/img/menu_image_Pumpkin-Basque.jpg"
                  alt="カボチャのバスク（gf）の写真"
                  width={6016}
                  height={4000}
                />
              </div>
            </div>
            <h3>カボチャのバスク（gf）</h3>
          </article>
          <article id="Lemon-Basque">
            <div className="Lemon-Basque_wrap">
              <div className="Lemon-Basque_img">
                <Image
                  src="/img/menu_image_Lemon-Basque.jpg"
                  alt="檸檬バスクの写真"
                  width={6240}
                  height={4160}
                />
              </div>
            </div>
            <h3>檸檬バスク</h3>
          </article>
          <article id="Lemon-Jelly">
            <div className="Lemon-Jelly_wrap">
              <div className="Lemon-Jelly_img">
                <Image
                  src="/img/menu_image_Lemon-Jelly.jpg"
                  alt="檸檬ゼリーの写真"
                  width={6240}
                  height={4160}
                />
              </div>
            </div>
            <h3>檸檬ゼリー</h3>
          </article>
          <article id="Tea-Basque">
            <div className="Tea-Basque_wrap">
              <div className="Tea-Basque_img">
                <Image
                  src="/img/menu_image_Tea-Basque.jpg"
                  alt="紅茶のバスクの写真"
                  width={6240}
                  height={4160}
                />
              </div>
            </div>
            <h3>紅茶のバスク</h3>
          </article>
          <article id="Tiramisu-style-Basque">
            <div className="Tiramisu-style-Basque_wrap">
              <div className="Tiramisu-style-Basque_img">
                <Image
                  src="/img/menu_image_Tiramisu-style-Basque.jpg"
                  alt="ティラミス風バスクの写真"
                  width={1170}
                  height={1751}
                />
              </div>
            </div>
            <h3>ティラミス風バスク</h3>
          </article>
          <article id="Blueberry-and-Rice-Flour-Crumble-Cheesecake">
            <div className="Blueberry-and-Rice-Flour-Crumble-Cheesecake_wrap">
              <div className="Blueberry-and-Rice-Flour-Crumble-Cheesecake_img">
                <Image
                  src="/img/menu_image_Blueberry-and-Rice-Flour-Crumble-Cheesecake.jpg"
                  alt="ブルーベリーと米粉のクランブルチーズケーキ（gf）の写真"
                  width={4160}
                  height={6240}
                />
              </div>
            </div>
            <h3>ブルーベリーと米粉のクランブルチーズケーキ（gf）</h3>
          </article>
          <article id="Brown-Sugar-Brulee-Baked-Cheesecake">
            <div className="Brown-Sugar-Brulee-Baked-Cheesecake_wrap">
              <div className="Brown-Sugar-Brulee-Baked-Cheesecake_img">
                <Image
                  src="/img/menu_image_Brown-Sugar-Brulee-Baked-Cheesecake.jpg"
                  alt="黒糖ブリュレベイクドチーズケーキ（gf）の写真"
                  width={6240}
                  height={4160}
                />
              </div>
            </div>
            <h3>黒糖ブリュレベイクドチーズケーキ（gf）</h3>
          </article>
          <article id="Rice-Flour-Muffin">
            <h3>米粉マフィン（gf）</h3>
            <p>
              気まぐれで登場するマフィンも、
              <br />
              グルテンフリーでおつくりさせていただいております
              <br />
              バター不使用なので、ヘルシー
              <br />
              そしてふわっと、しっとり。
              <br />
              レシピも季節に合わせた果物や
              <br />
              紅茶やコーヒーを使用。
              <br />
              何度もリピートしていただいてる好評メニューです！
              <br />
              気まぐれで登場するので出逢えたらぜひ！
            </p>
            <article id="Ginger">
              <div className="Ginger_wrap">
                <div className="Ginger_img">
                  <Image
                    src="/img/menu_image_Ginger.jpg"
                    alt="米粉のジンジャーナッツマフィンの写真"
                    width={4160}
                    height={6240}
                  />
                </div>
              </div>
              <h4>米粉のジンジャーナッツマフィン</h4>
            </article>
            <article id="Kinkan">
              <div className="Kinkan_wrap">
                <div className="Kinkan_img">
                  <Image
                    src="/img/menu_image_Kinkan.jpg"
                    alt="米粉金柑とクリチのマフィンの写真"
                    width={4160}
                    height={6240}
                  />
                </div>
              </div>
              <h4>米粉金柑とクリチのマフィン</h4>
            </article>
            <article id="Choco-Banana-Muffin">
              <div className="Choco-Banana-Muffin_wrap">
                <div className="Choco-Banana-Muffin_img">
                  <Image
                    src="/img/menu_image_Choco-Banana-Muffin.jpg"
                    alt="チョコバナナマフィンの写真"
                    width={4160}
                    height={6240}
                  />
                </div>
              </div>
              <h4>チョコバナナマフィン</h4>
            </article>
            <article id="Blueberry-and-Cream-Cheese-Muffin">
              <div className="Blueberry-and-Cream-Cheese-Muffin_wrap">
                <div className="Blueberry-and-Cream-Cheese-Muffin_img">
                  <Image
                    src="/img/menu_image_Blueberry-and-Cream-Cheese-Muffin.jpg"
                    alt="ブルーベリーとクリチのマフィンの写真"
                    width={6240}
                    height={4160}
                  />
                </div>
              </div>
              <h4>ブルーベリーとクリチのマフィン</h4>
            </article>
            <article id="Matcha-Muffin">
              <div className="Matcha-Muffin_wrap">
                <div className="Matcha-Muffin_img">
                  <Image
                    src="/img/menu_image_Matcha-Muffin.jpg"
                    alt="こし餡とクリチの抹茶マフィンの写真"
                    width={6240}
                    height={4160}
                  />
                </div>
              </div>
              <h4>こし餡とクリチの抹茶マフィン</h4>
            </article>
          </article>
        </section>
      </div>
    </main>
  );
}
