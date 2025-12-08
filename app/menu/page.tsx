"use client";
import Image from "next/image";
import Footer from "@/components/footer";
export default function MenuPageTest() {
  return (
    <main className="menu-page">
      <div id="bg-video-stack" aria-hidden="true">
        <div className="bg-video-track">
          <video id="bg-video-1" autoPlay loop muted playsInline>
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
            />
            Your browser does not support the video tag.
          </video>
          <video id="bg-video-2" autoPlay loop muted playsInline>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
              type="video/mp4"
            />
          </video>
          <video id="bg-video-3" autoPlay loop muted playsInline>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
              type="video/mp4"
            />
          </video>
          <video id="bg-video-4" autoPlay loop muted playsInline>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="bg-video-overlay" aria-hidden="true" />
      <nav className="menu-page__nav">
        <ul>
          {/* DRINK */}
          <li>
            DRINK
            <ul>
              <li>
                <a href="#1000">コーヒー（アイス／ホット）</a>
              </li>
              <li>
                <a href="#1010">ラテ（アイス／ホット）</a>
              </li>
              <li>
                <a href="#1020">メープルラテ</a>
              </li>
              <li>
                <a href="#1030">エスプレッソトニック（春夏限定）</a>
              </li>
              <li>
                <a href="#1040">チャイ（アイス／ホット）</a>
              </li>
              <li>
                <a href="#1050">ダークモカ</a>
              </li>
              <li>
                <a href="#1060">気まぐれドリンク</a>
                <ul>
                  <li>
                    <a href="#1070">紫蘇ソーダ</a>
                  </li>
                  <li>
                    <a href="#1080">コーヒー檸檬ソーダ</a>
                  </li>
                  <li>
                    <a href="#1090">抹茶ドリンク</a>
                  </li>
                  <li>
                    <a href="#1100">ほうじ茶ラテ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* SWEET */}
          <li>
            SWEET
            <ul>
              <li>
                <a href="#2000">グルテンフリー定番バスクチーズケーキ</a>
              </li>

              <li>
                <a href="#2010">気まぐれスイーツ</a>
                <ul>
                  <li>
                    <a href="#2020">ぜんざいアフォガード</a>
                  </li>
                  <li>
                    <a href="#2030">チョコムースケーキ</a>
                  </li>
                  <li>
                    <a href="#2040">焼き芋ブリュレバスク</a>
                  </li>
                  <li>
                    <a href="#2050">チョコバスク</a>
                  </li>
                  <li>
                    <a href="#2060">かぼちゃバスク</a>
                  </li>
                  <li>
                    <a href="#2070">ティラミス風バスク</a>
                  </li>
                  <li>
                    <a href="#2080">紅茶のバスク</a>
                  </li>
                  <li>
                    <a href="#2090">檸檬ゼリーとレアチーズケーキ</a>
                  </li>
                  <li>
                    <a href="#2100">檸檬バスク</a>
                  </li>
                  <li>
                    <a href="#2110">
                      ドライフルーツの米粉オールドファッションチーズケーキ
                    </a>
                  </li>
                  <li>
                    <a href="#2120">バナナブリュレバスク</a>
                  </li>
                  <li>
                    <a href="#2130">
                      ブルーベリーと米粉のクランブルチーズケーキ
                    </a>
                  </li>
                  <li>
                    <a href="#2140">りんごと米粉のクランブルチーズケーキこ</a>
                  </li>
                  <li>
                    <a href="#2150">黒糖ブリュレバスク</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#2160">米粉マフィン</a>
                <ul>
                  <li>
                    <a href="#2170">ジンジャー</a>
                  </li>
                  <li>
                    <a href="#2180">金柑</a>
                  </li>
                  <li>
                    <a href="#2190">チョコバナナマフィン</a>
                  </li>
                  <li>
                    <a href="#2200">ブルーベリーとクリチのマフィン</a>
                  </li>
                  <li>
                    <a href="#2210">抹茶マフィン</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <article className="menu-page__article">
        <h2>DRINK</h2>

        <div id="1000">
          <h2>コーヒー（アイス／ホット）</h2>
          <p>
            珈琲豆はグレードの最も高いと言われる
            <br />
            “スペシャルティーコーヒー”を使用しております
            <br />
            それらは生産からカップまでの全工程で品質管理が行われ
            <br />
            特定の評価基準をクリアした高品質なコーヒーです
            <br />
            それはアロマのように香り高く、
            <br />
            珈琲なのに甘味を感じられ
            <br />
            雑味はなく透明感があり、冷めても美味しい珈琲と言われています
            <br />
            そしてどれを飲んでも全く違う味がすること
            <br />
            珈琲はどれも一緒と思っていたわたしですが
            <br />
            今は選ぶのが楽しいひと時になってます
            <br />
            当店は3種類の珈琲豆からお選びいただけます
            <br />
            どっしりとした香ばしいものからまるで紅茶のようにすっきりしたもの
            <br />
            ご注文頂いてから一杯、一杯豆から挽いてお淹れ致します
            <br />
            ゆったりとした時間をお過ごしくださいませ
          </p>
          <Image
            src="/img/menu/1000.jpg"
            width={800}
            height={600}
            alt="コーヒー"
          />
        </div>

        <div id="1010">
          <h2>ラテ（アイス／ホット）</h2>
          <p>
            濃厚なエスプレッソとミルクが溶け合うラテは
            <br />
            なめらかな口当たりとアロマのような香り豊かな一杯。
            <br />
            当店のラテは苦味の少ない豆を使用してるので
            <br />
            お砂糖を入れなくても飲みやすく女性に好評です
          </p>
          <Image
            src="/img/menu/1010.jpg"
            alt="ラテ（アイス／ホット）"
            width={800}
            height={600}
          />
        </div>

        <div id="1020">
          <h2>メープルラテ</h2>
          <p>
            生キャラメルの様なリッチな味わいのメープルラテ
            <br />
            甘さ控えめなので最後まで楽しめます
          </p>
          <Image
            src="/img/menu/1020.jpg"
            alt="メープルラテ"
            width={800}
            height={600}
          />
        </div>

        <div id="1030">
          <h2>エスプレッソトニック（春夏限定）</h2>
          <p>
            エスプレッソとトニックウォーターを割った
            <br />
            新感覚のアレンジコーヒードリンク
            <br />
            <br />
            柑橘系のグレープフルーツやジントニック系のお酒を思わせるような一杯。
          </p>
          <Image
            src="/img/menu/1030.jpg"
            alt="エスプレッソトニック（春夏限定）"
            width={800}
            height={600}
          />
        </div>

        <div id="1040">
          <h2>チャイ（アイス／ホット）</h2>
          <p>
            カフェインが気になる日の冒険&quot;チャイ&quot;
            <br />
            チャイはスパイスを使用したインド式のミルクティー
            <br />
            材料は全て天然素材で身体に優しく
            <br />
            カルダモン・シナモン・生姜などのスパイスで
            <br />
            リラックス効果をもたらす一杯です
            <br />
            当店のチャイはデカフェなので90％以上カフェインが
            <br />
            除去されたものです
            <br />
            <br />
            ノーマルのチャイソイラテに
            <br />
            蜂蜜やココアを足したメニューも！
            <br />
            写真はココアバージョンです
          </p>
          <Image
            src="/img/menu/1040.jpg"
            alt="チャイ（アイス／ホット）"
            width={800}
            height={600}
          />
        </div>

        <div id="1050">
          <h2>ダークモカ</h2>
          <p>
            ダークチョコレートのほろ苦さとミルク、
            <br />
            コーヒーがマッチしたスイーツ系ドリンク
          </p>
          <Image
            src="/img/menu/1050.jpg"
            alt="ダークモカ"
            width={800}
            height={600}
          />
        </div>

        <div id="1060">
          <h2>気まぐれドリンク</h2>
          <p>
            旬なものを使用した様々なドリンクが
            <br />
            期間限定で登場することも。
            <br />
            その時にしか味わえないもので常連様にも喜んでいただいてます。
          </p>
          <Image
            src="/img/menu/1060.jpg"
            alt="気まぐれドリンク"
            width={800}
            height={600}
          />
        </div>

        <div id="1070">
          <h2>紫蘇ソーダ</h2>
          <p>
            独特な爽やかな香りと鮮やかな色で見た目も華やかな一杯。
            <br />
            疲労回復や、夏バテ防止に。
          </p>
          <Image
            src="/img/menu/1070.jpg"
            alt="紫蘇ソーダ"
            width={800}
            height={600}
          />
        </div>

        <div id="1080">
          <h2>コーヒー檸檬ソーダ</h2>
          <p>
            大好きな珈琲屋さんから伝授してもらった
            <br />
            店主も大好きな一杯。
            <br />
            想像できない味をぜひ体感してください
          </p>
          <Image
            src="/img/menu/1080.jpg"
            alt="コーヒー檸檬ソーダ"
            width={800}
            height={600}
          />
        </div>

        <div id="1090">
          <h2>抹茶ドリンク</h2>
          <p>
            コクのある黒糖で仕上げた抹茶ドリンクは
            <br />
            意外にも爽やかで何度も飲みたくなるような優しい味わいです
          </p>
          <Image
            src="/img/menu/1090.jpg"
            alt="抹茶ドリンク"
            width={800}
            height={600}
          />
        </div>

        <div id="1100">
          <h2>ほうじ茶ラテ</h2>
          <p>ほうじ茶の香ばしい香りとまろやかなミルクが相性抜群♪</p>
          <Image
            src="/img/menu/1100.jpg"
            alt="ほうじ茶ラテ"
            width={800}
            height={600}
          />
        </div>

        <h2>SWEET</h2>

        <div id="2000">
          <h2>グルテンフリー定番バスクチーズケーキ</h2>
          <p>
            定番のバスクは何度でも食べたくなる
            <br />
            &quot;simple is the best!!&quot;
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
          <Image
            src="/img/menu/2000.jpg"
            alt="グルテンフリー定番バスクチーズケーキ"
            width={800}
            height={600}
          />
        </div>

        <div id="2010">
          <h2>気まぐれスイーツ</h2>
          <p>
            当店は定番バスクチーズケーキ以外にも
            <br />
            何度来ても楽しめる様に
            <br />
            季節に合わせたスイーツが登場いたします！
            <br />
            常連様に今年も食べれるー！と
            <br />
            毎年の楽しみにしていただいてるような
            <br />
            スイーツから新作まで。
            <br />
            可能な限りグルテンフリーを意識し
            <br />
            甘さ控えめで最後まで楽しめる。を心がけ
            <br />
            手作りさせていただいております。
          </p>
          <Image
            src="/img/menu/2010.jpg"
            alt="気まぐれスイーツ"
            width={800}
            height={600}
          />
        </div>

        <div id="2020">
          <h2>ぜんざいアフォガード</h2>
          <p>
            焼きたてのお餅にバニラアイス
            <br />
            ぜんざい、エスプレッソをかけた
            <br />
            鏡開きにちなんで始めた気まぐれスイーツ
          </p>
          <Image
            src="/img/menu/2020.jpg"
            alt="ぜんざいアフォガード"
            width={800}
            height={600}
          />
        </div>

        <div id="2030">
          <h2>チョコムースケーキ</h2>
          <p>
            濃厚な口溶けのチョコムースは
            <br />
            バレンタインの時期に気まぐれで登場
          </p>
          <Image
            src="/img/menu/2030.jpg"
            alt="チョコムースケーキ"
            width={800}
            height={600}
          />
        </div>

        <div id="2040">
          <h2>焼き芋ブリュレバスク</h2>
          <p>
            焼き芋ブリュレの香ばしさと
            <br />
            チーズの酸味が相性抜群です！
          </p>
          <Image
            src="/img/menu/2040.jpg"
            alt="焼き芋ブリュレバスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2050">
          <h2>チョコバスク</h2>
          <p>
            チョコレートとチーズを合わせることで
            <br />
            サッパリとしたくどくないチョコバスクで
            <br />
            最後の一口までお楽しみいただけます
          </p>
          <Image
            src="/img/menu/2050.jpg"
            alt="チョコバスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2060">
          <h2>かぼちゃバスク</h2>
          <p>
            毎年秋に楽しみにしてる方も多いスイーツ
            <br />
            濃厚なカボチャで秋を楽しみましょう
          </p>
          <Image
            src="/img/menu/2060.jpg"
            alt="かぼちゃバスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2070">
          <h2>ティラミス風バスク</h2>
          <p>
            当店のコーヒー豆を使用した
            <br />
            珈琲屋のティラミス風バスク
          </p>
          <Image
            src="/img/menu/2070.jpg"
            alt="ティラミス風バスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2080">
          <h2>紅茶のバスク</h2>
          <p>
            アールグレイの優しくも香り高い
            <br />
            濃厚な口溶けのバスクです
          </p>
          <Image
            src="/img/menu/2080.jpg"
            alt="紅茶のバスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2090">
          <h2>檸檬ゼリーとレアチーズケーキ</h2>
          <p>爽やかな檸檬でさっぱりと！</p>
          <Image
            src="/img/menu/2090.jpg"
            alt="檸檬ゼリーとレアチーズケーキ"
            width={800}
            height={600}
          />
        </div>

        <div id="2100">
          <h2>檸檬バスク</h2>
          <p>
            レモンの酸味とチーズのコクが相性抜群です
            <br />
            浅煎りの珈琲と一緒にぜひ
          </p>
          <Image
            src="/img/menu/2100.jpg"
            alt="檸檬バスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2110">
          <h2>ドライフルーツの米粉オールドファッションチーズケーキ</h2>
          <p>
            ドライフルーツを使用したケーキは
            <br />
            濃厚なアメリカーノと相性抜群です
          </p>
          <Image
            src="/img/menu/2110.jpg"
            alt="ドライフルーツの米粉オールドファッションチーズケーキ"
            width={800}
            height={600}
          />
        </div>

        <div id="2120">
          <h2>バナナブリュレバスク</h2>
          <p>
            栽培期間中、無農薬で育てられたバナナを
            <br />
            練り込んでつくった贅沢なバスク
            <br />
            ブリュレのパリッと食感も美味しさ増します
          </p>
          <Image
            src="/img/menu/2120.jpg"
            alt="バナナブリュレバスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2130">
          <h2>ブルーベリーと米粉のクランブルチーズケーキ</h2>
          <p>
            爽やかなブルーベリーがチーズの引き立て役に。
            <br />
            クランブルも米粉なので嬉しいポイント！
          </p>
          <Image
            src="/img/menu/2130.jpg"
            alt="ブルーベリーと米粉のクランブルチーズケーキ"
            width={800}
            height={600}
          />
        </div>

        <div id="2140">
          <h2>りんごと米粉のクランブルチーズケーキ</h2>
          <p>
            シナモンで香り付けしたりんごが
            <br />
            秋のコーヒーにぴったりです
          </p>
          <Image
            src="/img/menu/2140.jpg"
            alt="りんごと米粉のクランブルチーズケーキ"
            width={800}
            height={600}
          />
        </div>

        <div id="2150">
          <h2>黒糖ブリュレバスク</h2>
          <p>
            ヨーグルトを使用し爽やかに仕上げた春夏のスイーツ
            <br />
            ほろ苦いカラメルのような香ばさがラテにぴったりです
          </p>
          <Image
            src="/img/menu/2150.jpg"
            alt="黒糖ブリュレバスク"
            width={800}
            height={600}
          />
        </div>

        <div id="2160">
          <h2>米粉マフィン</h2>
          <p>
            気まぐれで登場するマフィンも、
            <br />
            グルテンフリーでおつくりさせていただいております
            <br />
            バター不使用なので、ヘルシーで
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
          <Image
            src="/img/menu/2160.jpg"
            alt="米粉マフィン"
            width={800}
            height={600}
          />
        </div>

        <div id="2170">
          <h2>ジンジャー</h2>
          <p>浅煎りの珈琲との相性抜群なマフィンです</p>
          <Image
            src="/img/menu/2170.jpg"
            alt="ジンジャー"
            width={800}
            height={600}
          />
        </div>

        <div id="2180">
          <h2>金柑</h2>
          <p>
            金柑の爽やかな風味と甘酸っぱさが
            <br />
            角切りに入ったクリームチーズと相性ぴったりです！
          </p>
          <Image src="/img/menu/2180.jpg" alt="金柑" width={800} height={600} />
        </div>

        <div id="2190">
          <h2>チョコバナナマフィン</h2>
          <p>
            子供から大人まで好評なシリーズ！
            <br />
            ラテとの相性抜群です
          </p>
          <Image
            src="/img/menu/2190.jpg"
            alt="チョコバナナマフィン"
            width={800}
            height={600}
          />
        </div>

        <div id="2200">
          <h2>ブルーベリーとクリチのマフィン</h2>
          <p>
            しっとりしたマフィンに爽やかなブルーベリーの果実感が味わえる人気マフィン
          </p>
          <Image
            src="/img/menu/2200.jpg"
            alt="ブルーベリーとクリチのマフィン"
            width={800}
            height={600}
          />
        </div>

        <div id="2210">
          <h2>抹茶マフィン</h2>
          <p>
            抹茶のほろ苦さと豊かな香りが楽しめるマフィン
            <br />
            ラテとの相性抜群です！
          </p>
          <Image
            src="/img/menu/2210.jpg"
            alt="抹茶マフィン"
            width={800}
            height={600}
          />
        </div>
      </article>
      <Footer />
    </main>
  );
}
