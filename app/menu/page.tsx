"use client";

import Image from "next/image";

export default function MenuPage() {
  return (
    <main className="menu_page">
      <a href="/menu">
        <h1>MENU</h1>
      </a>
      <div className="menu">
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
            <h3>コーヒー(ice/hot)</h3>
            <div className="coffee_ice_img">
              <Image
                src="/img/menu_image_coffee(ice).jpg"
                alt="アイスコーヒーの写真"
                width={6240}
                height={4160}
              />
            </div>
            <p>
              珈琲豆はグレードの最も高いと言われる
              <br />
              “スペシャルティーコーヒー”を使用しております。
            </p>
            <p>
              その特徴は透明感があること
              <br />
              そして冷めても美味しい珈琲であること
              <br />
              そしてどれを飲んでも全く違う味がすること
              <br />
              珈琲はどれも一緒と思っていたわたしですが
              <br />
              今は選ぶのが楽しいひと時になってます。
            </p>
          </article>
          <article id="latte">
            <h3>ラテ(ice/hot)</h3>
            <div className="latte_hot_img">
              <Image
                src="/img/menu_image_latte(hot).jpg"
                alt="ホットコーヒーの写真"
                width={6240}
                height={4160}
              />
            </div>
            <p>
              濃厚なエスプレッソとミルクが溶け合うラテは
              <br />
              なめらかな口当たりとアロマのような香り豊かな一杯。
              <br />
              当店のラテは苦味の少ない豆を使用してるので
              お砂糖を入れなくても飲みやすく女性に好評です。
              <br />
            </p>
            <div className="latte_ice_img">
              <Image
                src="/img/menu_image_latte(ice).jpg"
                alt="アイスラテの写真"
                width={6240}
                height={4160}
              />
            </div>
          </article>
          <article id="maple-latte">
            <h3>メープルラテ</h3>
            <div className="maple-latte_img">
              <Image
                src="/img/menu_image_maple-latte.jpg"
                alt="メープルラテの写真"
                width={4160}
                height={6240}
              />
            </div>
            <p>
              生キャラメルの様なリッチな味わいのメープルラテ
              <br />
              甘さ控えめなので最後まで楽しめます
            </p>
          </article>
          <article id="espresso-tonic">
            <h3>エスプレッソトニック</h3>
            <span>※春夏限定</span>
            <div className="espresso-tonic_img">
              <Image
                src="/img/menu_image_espresso-tonic.jpg"
                alt="エスプレッソトニックの写真"
                width={6240}
                height={4160}
              />
            </div>
            <p>
              エスプレッソとトニックウォーターを割った
              <br />
              新感覚のアレンジコーヒードリンク
              <br />
              柑橘系のグレープフルーツやジントニック系のお酒を思わせるような一杯。
            </p>
          </article>
          <article id="chai">
            <h3>チャイ(ice/hot)</h3>
            <div className="chai_hot_img">
              <Image
                src="/img/menu_image_chai(hot).jpg"
                alt="チャイ(hot)の写真"
                width={6240}
                height={4160}
              />
            </div>
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
            <div className="chai_ice_img">
              <Image
                src="/img/menu_image_chai(ice).jpg"
                alt="チャイ(ice)の写真"
                width={6240}
                height={4160}
              />
            </div>
            <p>
              当店のチャイはデカフェなので90%以上カフェインが
              <br />
              除去されたものです ノーマルのチャイソイラテに
              <br />
              蜂蜜やココアを足したメニューも！ 写真はココアバージョンです
            </p>
          </article>
          <article id="dark-mocha">
            <h3>ダークモカ</h3>
            <div className="dark-mocha_img">
              <Image
                src="/img/menu_image_dark-mocha.jpg"
                alt="ダークモカの写真"
                width={4000}
                height={6016}
              />
            </div>
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
              <div className="shiso-soda_img">
                <Image
                  src="/img/menu_image_shiso-soda.jpg"
                  alt="紫蘇ソーダの写真"
                  width={4160}
                  height={6240}
                />
              </div>
              <h4>紫蘇ソーダ</h4>
            </article>
            <article id="coffee-lemon soda">
              <div className="coffee-lemon-soda_img">
                <Image
                  src="/img/menu_image_coffee-lemon-soda.jpg"
                  alt="コーヒー檸檬ソーダの写真"
                  width={6240}
                  height={4160}
                />
              </div>
              <h4>コーヒー檸檬ソーダ</h4>
            </article>
            <article id="matcha-drink">
              <div className="matcha-drink_img">
                <Image
                  src="/img/menu_image_matcha-drink.jpg"
                  alt="抹茶ドリンクの写真"
                  width={4160}
                  height={6240}
                />
              </div>
              <h4>抹茶ドリンク</h4>
            </article>
            <article id="hojicha-latte">
              <div className="hojicha-latte_img">
                <Image
                  src="/img/menu_image_hojicha-latte.jpg"
                  alt="ほうじ茶ラテの写真"
                  width={4160}
                  height={6240}
                />
              </div>
              <h4>ほうじ茶ラテ</h4>
            </article>
            <article id="panna-cotta">
              <div className="panna-cotta_img">
                <Image
                  src="/img/menu_image_panna-cotta.jpg"
                  alt="桃とジュレジャムのパンナコッタの写真"
                  width={4160}
                  height={6240}
                />
              </div>
              <h4>桃とジュレジャムのパンナコッタ</h4>
            </article>
          </article>
        </section>
        <section className="menu-sweets">
          <h2>Sweets</h2>
          <article id="Burnt-Basque-Cheesecake">
            <h3>バスクチーズケーキ（gf）</h3>
            <div className="Burnt-Basque-Cheesecake_img">
              <Image
                src="/img/menu_image_Burnt-Basque-Cheesecake.jpg"
                alt="バスクチーズケーキ（gf）の写真"
                width={6016}
                height={4000}
              />
            </div>
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
            <div className="Zenzai-Affogato_img">
              <Image
                src="/img/menu_image_Zenzai-Affogato.jpg"
                alt="ぜんざいアフォガード（gf）の写真"
                width={770}
                height={506}
              />
            </div>
            <h3>ぜんざいアフォガード（gf）</h3>
          </article>
          <article id="Chocolate-Mousse-Cake">
            <div className="Chocolate-Mousse-Cake_img">
              <Image
                src="/img/menu_image_Chocolate-Mousse-Cake.jpg"
                alt="チョコムースケーキ（gf）の写真"
                width={6240}
                height={4160}
              />
            </div>
            <h3>チョコムースケーキ（gf）</h3>
          </article>
          <article id="Baked-Sweet-Potato-Brulee-Basque">
            <div className="Baked-Sweet-Potato-Brulee-Basque_img">
              <Image
                src="/img/menu_image_Baked-Sweet-Potato-Brulee-Basque.jpg"
                alt="焼き芋ブリュレバスク（gf）の写真"
                width={6016}
                height={4000}
              />
            </div>
            <h3>焼き芋ブリュレバスク（gf）</h3>
          </article>
          <article id="Pumpkin-Basque">
            <div className="Pumpkin-Basque_img">
              <Image
                src="/img/menu_image_Pumpkin-Basque.jpg"
                alt="カボチャのバスク（gf）の写真"
                width={6016}
                height={4000}
              />
            </div>
            <h3>カボチャのバスク（gf）</h3>
          </article>
          <article id="Lemon-Basque">
            <div className="Lemon-Basque_img">
              <Image
                src="/img/menu_image_Lemon-Basque.jpg"
                alt="檸檬バスクの写真"
                width={6240}
                height={4160}
              />
            </div>
            <h3>檸檬バスク</h3>
          </article>
          <article id="Lemon-Jelly">
            <div className="Lemon-Jelly_img">
              <Image
                src="/img/menu_image_Lemon-Jelly.jpg"
                alt="檸檬ゼリーの写真"
                width={6240}
                height={4160}
              />
            </div>
            <h3>檸檬ゼリー</h3>
          </article>
          <article id="Tea-Basque">
            <div className="Tea-Basque_img">
              <Image
                src="/img/menu_image_Tea-Basque.jpg"
                alt="紅茶のバスクの写真"
                width={6240}
                height={4160}
              />
            </div>
            <h3>紅茶のバスク</h3>
          </article>
          <article id="Tiramisu-style-Basque">
            <div className="Tiramisu-style-Basque_img">
              <Image
                src="/img/menu_image_Tiramisu-style-Basque.jpg"
                alt="ティラミス風バスクの写真"
                width={1170}
                height={1751}
              />
            </div>
            <h3>ティラミス風バスク</h3>
          </article>
          <article id="Blueberry-and-Rice-Flour-Crumble-Cheesecake">
            <div className="Blueberry-and-Rice-Flour-Crumble-Cheesecake_img">
              <Image
                src="/img/menu_image_Blueberry-and-Rice-Flour-Crumble-Cheesecake.jpg"
                alt="ブルーベリーと米粉のクランブルチーズケーキ（gf）の写真"
                width={4160}
                height={6240}
              />
            </div>
            <h3>ブルーベリーと米粉のクランブルチーズケーキ（gf）</h3>
          </article>
          <article id="Brown-Sugar-Brulee-Baked-Cheesecake">
            <div className="Brown-Sugar-Brulee-Baked-Cheesecake_img">
              <Image
                src="/img/menu_image_Brown-Sugar-Brulee-Baked-Cheesecake.jpg"
                alt="黒糖ブリュレベイクドチーズケーキ（gf）の写真"
                width={6240}
                height={4160}
              />
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
              <div className="Ginger_img">
                <Image
                  src="/img/menu_image_Ginger.jpg"
                  alt="米粉のジンジャーナッツマフィンの写真"
                  width={4160}
                  height={6240}
                />
              </div>
              <h4>米粉のジンジャーナッツマフィン</h4>
            </article>
            <article id="Kinkan">
              <div className="Kinkan_img">
                <Image
                  src="/img/menu_image_Kinkan.jpg"
                  alt="米粉金柑とクリチのマフィンの写真"
                  width={4160}
                  height={6240}
                />
              </div>
              <h4>米粉金柑とクリチのマフィン</h4>
            </article>
            <article id="Choco-Banana-Muffin">
              <div className="Choco-Banana-Muffin_img">
                <Image
                  src="/img/menu_image_Choco-Banana-Muffin.jpg"
                  alt="チョコバナナマフィンの写真"
                  width={4160}
                  height={6240}
                />
              </div>
              <h4>チョコバナナマフィン</h4>
            </article>
            <article id="Blueberry-and-Cream-Cheese-Muffin">
              <div className="Blueberry-and-Cream-Cheese-Muffin_img">
                <Image
                  src="/img/menu_image_Blueberry-and-Cream-Cheese-Muffin.jpg"
                  alt="ブルーベリーとクリチのマフィンの写真"
                  width={6240}
                  height={4160}
                />
              </div>
              <h4>ブルーベリーとクリチのマフィン</h4>
            </article>
            <article id="Matcha-Muffin">
              <div className="Matcha-Muffin_img">
                <Image
                  src="/img/menu_image_Matcha-Muffin.jpg"
                  alt="こし餡とクリチの抹茶マフィンの写真"
                  width={6240}
                  height={4160}
                />
              </div>
              <h4>こし餡とクリチの抹茶マフィン</h4>
            </article>
          </article>
        </section>
      </div>
    </main>
  );
}
