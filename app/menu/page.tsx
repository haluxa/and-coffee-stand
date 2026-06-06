"use client";
import Image from "next/image";
import FadeInEffect from "@/_components/fadein";
import Footer from "@/_components/Footer/page";
export default function MenuPage() {
  return (
    <main className="menu-page">
      <FadeInEffect>
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
      </FadeInEffect>

      <article className="menu-page__article">
        <FadeInEffect>
          <h2>DRINK</h2>
        </FadeInEffect>

        <div id="1000">
          <FadeInEffect>
            <h2>
              コーヒー
              <span>&nbsp;（アイス／ホット）</span>
            </h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;珈琲豆はグレードの最も高いと言われる
              “スペシャルティーコーヒー”を使用しております。
              生産からカップまでの全工程で品質管理が行われ、
              特定の評価基準をクリアした高品質なコーヒーです。
              アロマのように香り高く、 珈琲なのに甘味を感じられ、
              雑味はなく透明感があり、冷めても美味しい珈琲です。
              どれを飲んでも全く違う味がする──。
              珈琲はどれも一緒と思っていたわたしですが、
              今は選ぶのが楽しいひと時になってます。
              <br />
              &emsp;当店は3種類の珈琲豆からお選びいただけます。
              どっしりとした香ばしいものからまるで紅茶のようにすっきりしたものまで。
              ご注文頂いてから一杯、一杯豆から挽いてお淹れ致しますので、
              ゆったりとした時間をお過ごしくださいませ。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1000.jpg"
              width={800}
              height={600}
              alt="コーヒー"
            />
          </FadeInEffect>
        </div>

        <div id="1010">
          <FadeInEffect>
            <h2>
              ラテ<span>&nbsp;（アイス／ホット）</span>
            </h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;濃厚なエスプレッソとミルクが溶け合うラテは、
              なめらかな口当たりとアロマのような豊かな香りがする一杯です。
              当店のラテは苦味の少ない豆を使用してるので、
              お砂糖を入れなくても飲みやすく女性に好評です。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1010.jpg"
              alt="ラテ（アイス／ホット）"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1020">
          <FadeInEffect>
            <h2>メープルラテ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;生キャラメルの様なリッチな味わいのメープルラテ──。
              甘さ控えめなので最後まで楽しめます。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1020.jpg"
              alt="メープルラテ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1030">
          <FadeInEffect>
            <h2>
              エスプレッソトニック<span>&nbsp;（春夏限定）</span>
            </h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;エスプレッソとトニックウォーターを割った新感覚のアレンジコーヒードリンク。
              柑橘系のグレープフルーツやジントニック系のお酒を思わせるような一杯です。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1030.jpg"
              alt="エスプレッソトニック（春夏限定）"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1040">
          <FadeInEffect>
            <h2>
              チャイ<span>&nbsp;（アイス／ホット）</span>
            </h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;カフェインが気になる日の冒険&nbsp;&quot;チャイ&quot;。
              チャイはスパイスを使用したインド式のミルクティーです。
              材料は全て天然素材で身体に優しく、カルダモン・シナモン・生姜などのスパイスでリラックス効果をもたらします。
              また、当店のチャイはデカフェなので90％以上カフェインが除去されたものを使用しております。
              ノーマルのチャイソイラテに蜂蜜やココアを足したメニューも！（写真はココアバージョンです。）
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1040.jpg"
              alt="チャイ（アイス／ホット）"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1050">
          <FadeInEffect>
            <h2>ダークモカ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;ダークチョコレートのほろ苦さとミルク、
              コーヒーがマッチしたスイーツ系ドリンク。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1050.jpg"
              alt="ダークモカ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1060">
          <FadeInEffect>
            <h2>気まぐれドリンク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;旬なものを使用した様々なドリンクが期間限定で登場することも!?
              その時にしか味わえないもので常連のお客様に喜んでいただいております。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1060.jpg"
              alt="気まぐれドリンク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1070">
          <FadeInEffect>
            <h2>紫蘇ソーダ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;独特な爽やかな香りと鮮やかな色で見た目も華やかな一杯です。
              疲労回復や、夏バテ防止に。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1070.jpg"
              alt="紫蘇ソーダ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1080">
          <FadeInEffect>
            <h2>コーヒー檸檬ソーダ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;大好きな珈琲屋さんから伝授してもらった店主も大好きな一杯。
              想像できない味をぜひ体感してください。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1080.jpg"
              alt="コーヒー檸檬ソーダ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1090">
          <FadeInEffect>
            <h2>抹茶ドリンク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;コクのある黒糖で仕上げた抹茶ドリンク。
              意外と爽やかで何度も飲みたくなるような優しい味わいです。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1090.jpg"
              alt="抹茶ドリンク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="1100">
          <FadeInEffect>
            <h2>ほうじ茶ラテ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>&emsp;ほうじ茶の香ばしい香りとまろやかなミルクが相性抜群♪</p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/1100.jpg"
              alt="ほうじ茶ラテ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <FadeInEffect>
          <h2>SWEET</h2>
        </FadeInEffect>

        <div id="2000">
          <FadeInEffect>
            <h2>グルテンフリー定番バスクチーズケーキ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;定番のバスクは何度でも食べたくなる..! &quot;simple is the
              best!!&quot;でありながら濃厚で滑らかな口溶けにこだわりました。
              <br />
              グルテンフリーなのも嬉しいポイント♪迷ったらまずはこれ！
              お好みでソルトをつけてお召し上がりくださいませ。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2000.jpg"
              alt="グルテンフリー定番バスクチーズケーキ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2010">
          <FadeInEffect>
            <h2>気まぐれスイーツ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;当店は定番バスクチーズケーキ以外にも季節に合わせたスイーツをご用意しております。
              常連のお客様に「今年も食べれるー！」と毎年楽しみにしていただいております。
              <br />
              &emsp;スイーツから新作まで。
              可能な限りグルテンフリーを意識し、「甘さ控えめで最後まで楽しめる。」を心がけ手作りさせていただいております。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2010.jpg"
              alt="気まぐれスイーツ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2020">
          <FadeInEffect>
            <h2>ぜんざいアフォガード</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;焼きたてのお餅にバニラアイス、ぜんざい、エスプレッソをかけた鏡開きにちなんで始めた気まぐれスイーツ。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2020.jpg"
              alt="ぜんざいアフォガード"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2030">
          <FadeInEffect>
            <h2>チョコムースケーキ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;濃厚な口溶けのチョコムースはバレンタインの時期に気まぐれで登場。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2030.jpg"
              alt="チョコムースケーキ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2040">
          <FadeInEffect>
            <h2>焼き芋ブリュレバスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>&emsp;焼き芋ブリュレの香ばしさとチーズの酸味が相性抜群です！</p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2040.jpg"
              alt="焼き芋ブリュレバスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2050">
          <FadeInEffect>
            <h2>チョコバスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;チョコレートとチーズを合わせることで、サッパリとしたくどくないチョコバスクです。
              最後の一口までお楽しみいただけます。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2050.jpg"
              alt="チョコバスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2060">
          <FadeInEffect>
            <h2>かぼちゃバスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;毎年秋に楽しみにしてる方も多いスイーツ。濃厚なカボチャで秋を楽しみましょう。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2060.jpg"
              alt="かぼちゃバスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2070">
          <FadeInEffect>
            <h2>ティラミス風バスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>&emsp;当店のコーヒー豆を使用した珈琲屋のティラミス風バスク。</p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2070.jpg"
              alt="ティラミス風バスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2080">
          <FadeInEffect>
            <h2>紅茶のバスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;アールグレイの優しくも香り高い濃厚な口溶けのバスクです。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2080.jpg"
              alt="紅茶のバスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2090">
          <FadeInEffect>
            <h2>檸檬ゼリーとレアチーズケーキ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>&emsp;爽やかな檸檬でさっぱりと！</p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2090.jpg"
              alt="檸檬ゼリーとレアチーズケーキ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2100">
          <FadeInEffect>
            <h2>檸檬バスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;レモンの酸味とチーズのコクが相性抜群です！浅煎りの珈琲と一緒にぜひ。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2100.jpg"
              alt="檸檬バスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2110">
          <FadeInEffect>
            <h2>ドライフルーツの米粉オールドファッションチーズケーキ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;ドライフルーツを使用したケーキは濃厚なアメリカーノと相性抜群です！
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2110.jpg"
              alt="ドライフルーツの米粉オールドファッションチーズケーキ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2120">
          <FadeInEffect>
            <h2>バナナブリュレバスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;栽培期間中、無農薬で育てられたバナナを練り込んでつくった贅沢なバスク。
              ブリュレのパリッと食感が美味しさを引き立ててくれます。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2120.jpg"
              alt="バナナブリュレバスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2130">
          <FadeInEffect>
            <h2>ブルーベリーと米粉のクランブルチーズケーキ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;爽やかなブルーベリーがチーズの引き立て役に。クランブルも米粉を使用し、グルテンフリーで作らせていただいております。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2130.jpg"
              alt="ブルーベリーと米粉のクランブルチーズケーキ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2140">
          <FadeInEffect>
            <h2>りんごと米粉のクランブルチーズケーキ</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;シナモンで香り付けしたりんごがアクセントのクランブルチーズケーキ。
              秋のコーヒーにぴったりです！
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2140.jpg"
              alt="りんごと米粉のクランブルチーズケーキ"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2150">
          <FadeInEffect>
            <h2>黒糖ブリュレバスク</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;ヨーグルトを使用し爽やかに仕上げた春夏のスイーツ。
              ほろ苦いカラメルのような香ばさがラテにぴったりです！
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2150.jpg"
              alt="黒糖ブリュレバスク"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2160">
          <FadeInEffect>
            <h2>米粉マフィン</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;気まぐれで登場するマフィンも、グルテンフリーでおつくりさせていただいております。バター不使用なので、ヘルシーで軽い口当たり。ふわっと、しっとりとした食感が特徴です。レシピも季節に合わせた果物や紅茶、コーヒーを使用しております。
              <br />
              &emsp;何度もリピートしていただいてる好評メニューです。
              気まぐれで登場するので出逢えたらぜひ！
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2160.jpg"
              alt="米粉マフィン"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2170">
          <FadeInEffect>
            <h2>ジンジャー</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>&emsp;浅煎りの珈琲との相性抜群なマフィンです。</p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2170.jpg"
              alt="ジンジャー"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2180">
          <FadeInEffect>
            <h2>金柑</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;金柑の爽やかな風味と甘酸っぱさが角切りに入ったクリームチーズと相性ぴったりです！
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2180.jpg"
              alt="金柑"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2190">
          <FadeInEffect>
            <h2>チョコバナナマフィン</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>&emsp;子供から大人まで好評なシリーズ！ラテとの相性抜群です！</p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2190.jpg"
              alt="チョコバナナマフィン"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2200">
          <FadeInEffect>
            <h2>ブルーベリーとクリチのマフィン</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;しっとりしたマフィンに爽やかなブルーベリーの果実感を味わえる人気マフィン。
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2200.jpg"
              alt="ブルーベリーとクリチのマフィン"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>

        <div id="2210">
          <FadeInEffect>
            <h2>抹茶マフィン</h2>
          </FadeInEffect>
          <FadeInEffect>
            <p>
              &emsp;抹茶のほろ苦さと豊かな香りが楽しめるマフィン──。
              ラテとの相性抜群です！
            </p>
          </FadeInEffect>
          <FadeInEffect>
            <Image
              src="/img/menu/2210.jpg"
              alt="抹茶マフィン"
              width={800}
              height={600}
            />
          </FadeInEffect>
        </div>
      </article>
      <Footer />
    </main>
  );
}
