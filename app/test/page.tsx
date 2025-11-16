// app/story/page.tsx など
"use client";

import { useState, useCallback } from "react";

const stories = [
  {
    id: 1,
    content: (
      <div>
        <h3>Iced Coffee</h3>
        <span>アイスコーヒー</span>
        <p>
          珈琲豆はグレードの最も高いと言われる
          <br />
          “スペシャルティーコーヒー”を使用しております。
        </p>
      </div>
    ),
    bg: "/img/menu/101_1.jpg",
  },
  {
    id: 2,
    content: (
      <div>
        <h3>Hot Coffee</h3>
        <span>ホットコーヒー</span>
      </div>
    ),
    bg: "/img/menu/101_2.jpg",
  },
  {
    id: 3,
    content: (
      <div>
        <h3>Iced Latte</h3>
        <span>アイスラテ</span>
        <p>
          濃厚なエスプレッソとミルクが溶け合うラテは
          <br />
          なめらかな口当たりとアロマのような香り豊かな一杯。
          <br />
          当店のラテは苦味の少ない豆を使用してるので
          お砂糖を入れなくても飲みやすく女性に好評です。
          <br />
        </p>
      </div>
    ),
    bg: "/img/menu/102_1.jpg",
  },
  {
    id: 4,
    content: (
      <div>
        <h3>Hot Latte</h3>
        <span>ホットラテ</span>
      </div>
    ),
    bg: "/img/menu/102_2.jpg",
  },
  {
    id: 5,
    content: (
      <div>
        <h3>Maple Latte</h3>
        <span>メープルラテ</span>
      </div>
    ),
    bg: "/img/menu/103.jpg",
  },
  {
    id: 6,
    content: (
      <div>
        <h3>Espresso Tonic</h3>
        <span>エスプレッソトニック ※春夏限定</span>
        <p>
          エスプレッソとトニックウォーターを割った
          <br />
          新感覚のアレンジコーヒードリンク
          <br />
          柑橘系のグレープフルーツやジントニック系のお酒を思わせるような一杯。
        </p>
      </div>
    ),
    bg: "/img/menu/104.jpg",
  },
  {
    id: 7,
    content: (
      <div>
        <h3>Chai</h3>
        <span>チャイ カフェインが気になる日の冒険</span>
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
      </div>
    ),
    bg: "/img/menu/105.jpg",
  },
  {
    id: 8,
    content: (
      <div>
        <h3>Dark Mocha</h3>
        <span>ダークモカ</span>
        <p>
          ダークチョコレートのほろ苦さとミルク、
          <br />
          コーヒーがマッチしたスイーツ系ドリンク
        </p>
      </div>
    ),
    bg: "/img/menu/106_1.jpg",
  },
  {
    id: 10,
    content: (
      <div>
        <h4>Shiso Soda</h4>
        <span>紫蘇ソーダ</span>
      </div>
    ),
    bg: "/img/menu/107.jpg",
  },
  {
    id: 11,
    content: (
      <div>
        <h4>Coffee Lemon Soda</h4>
        <span>コーヒー檸檬ソーダ</span>
      </div>
    ),
    bg: "/img/menu/108_2.jpg",
  },
  {
    id: 12,
    content: (
      <div>
        <h4>Matcha Drink</h4>
        <span>抹茶ドリンク</span>
      </div>
    ),
    bg: "/img/menu/109_1.jpg",
  },
  {
    id: 13,
    content: (
      <div>
        <h4></h4>
      </div>
    ),
    bg: "/img/menu/109_2.jpg",
  },
  {
    id: 14,
    content: (
      <div>
        <h4>Hojicha Latte</h4>
        <span>ほうじ茶ラテ</span>
      </div>
    ),
    bg: "/img/menu/110.jpg",
  },
  {
    id: 15,
    content: (
      <div>
        <h4>Panna Cotta with Peach & Jelly Jam</h4>
        <span>桃とジュレジャムのパンナコッタ</span>
      </div>
    ),
    bg: "/img/menu/111.jpg",
  },

  //--------------------------------------------
  // SWEETS
  //--------------------------------------------
  {
    id: 101,
    content: (
      <div>
        <h3>Basque Cheesecake</h3>
        <span>バスクチーズケーキ（gf）</span>
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
      </div>
    ),
    bg: "/img/menu/201_1.jpg",
  },
  {
    id: 102,
    bg: "/img/menu/201_3.jpg",
    content: (
      <div>
        <h3>choco-basque</h3>
        <span>チョコバスク</span>
      </div>
    ),
  },
  {
    id: 103,
    content: (
      <div>
        <h3>Zenzai Affogato</h3>
        <span>ぜんざいアフォガード（gf）</span>
      </div>
    ),
    bg: "/img/menu/201_2.jpg",
  },
  {
    id: 104,
    content: (
      <div>
        <h3>Chocolate Mousse Cake</h3>
        <span>チョコムースケーキ（gf）</span>
      </div>
    ),
    bg: "/img/menu/202.jpg",
  },
  {
    id: 105,
    content: (
      <div>
        <h3>Roasted Sweet Potato Brûlée Basque</h3>
        <span>焼き芋ブリュレバスク（gf）</span>
      </div>
    ),
    bg: "/img/menu/203.jpg",
  },
  {
    id: 106,
    content: (
      <div>
        <h3>Pumpkin Basque</h3>
        <span>カボチャのバスク（gf）</span>
      </div>
    ),
    bg: "/img/menu/204.jpg",
  },
  {
    id: 107,
    content: (
      <div>
        <h3>Lemon Basque</h3>
        <span>檸檬バスク</span>
      </div>
    ),
    bg: "/img/menu/205.jpg",
  },
  {
    id: 108,
    content: (
      <div>
        <h3>Lemon Jelly</h3>
        <span>檸檬ゼリー</span>
      </div>
    ),
    bg: "/img/menu/206.jpg",
  },
  {
    id: 109,
    content: (
      <div>
        <h3>Black Tea Basque</h3>
        <span>紅茶のバスク</span>
      </div>
    ),
    bg: "/img/menu/207.jpg",
  },
  {
    id: 110,
    content: (
      <div>
        <h3>Tiramisu-style Basque</h3>
        <span>ティラミス風バスク</span>
      </div>
    ),
    bg: "/img/menu/208.jpg",
  },
  {
    id: 111,
    content: (
      <div>
        <h3>Blueberry & Rice Flour Crumble Cheesecake</h3>
        <span>ブルーベリーと米粉のクランブルチーズケーキ（gf）</span>
      </div>
    ),
    bg: "/img/menu/209.jpg",
  },
  {
    id: 112,
    content: (
      <div>
        <h3>Brown Sugar Brûlée Baked Cheesecake</h3>
        <span>黒糖ブリュレベイクドチーズケーキ（gf）</span>
      </div>
    ),
    bg: "/img/menu/210.jpg",
  },
  {
    id: 121,
    content: (
      <div>
        <h4>Rice Flour Ginger Nut Muffin</h4>
        <span>米粉のジンジャーナッツマフィン</span>
      </div>
    ),
    bg: "/img/menu/221.jpg",
  },
  {
    id: 122,
    content: (
      <div>
        <h4>Rice Flour Kumquat & Cream Cheese Muffin</h4>
        <span>米粉金柑とクリチのマフィン</span>
      </div>
    ),
    bg: "/img/menu/222.jpg",
  },
  {
    id: 123,
    content: (
      <div>
        <h4>Chocolate Banana Muffin</h4>
        <span>チョコバナナマフィン</span>
      </div>
    ),
    bg: "/img/menu/223.jpg",
  },
  {
    id: 124,
    bg: "/img/menu/224.jpg",
  },
  {
    id: 125,
    content: (
      <div>
        <h4>Blueberry & Cream Cheese Muffin</h4>
        <span>ブルーベリーとクリチのマフィン</span>
      </div>
    ),
    bg: "/img/menu/225.jpg",
  },
  {
    id: 126,
    content: (
      <div>
        <h4>Matcha Muffin with Sweet Red Bean Paste & Cream Cheese</h4>
        <span>こし餡とクリチの抹茶マフィン</span>
      </div>
    ),
    bg: "/img/menu/226_1.jpg",
  },
  {
    id: 127,

    bg: "/img/menu/226_2.jpg",
  },
];

export default function StoryViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // --- ① ここに ナビ用の state と関数を追加 ---
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuType, setMenuType] = useState<"drink" | "sweet" | null>(null);

  const openMenu = (type: "drink" | "sweet") => {
    setMenuType(type);
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setMenuType(null);
  };
  // DRINK / SWEET それぞれの目次用リスト（id とタイトルだけ）
  const drinkNav = [
    { id: 1, title: "アイスコーヒー" },
    { id: 2, title: "ホットコーヒー" },
    { id: 3, title: "アイスラテ" },
    { id: 4, title: "ホットラテ" },
    { id: 5, title: "メープルラテ" },
    { id: 6, title: "エスプレッソトニック" },
    { id: 7, title: "チャイ" },
    { id: 8, title: "ダークモカ" },
    { id: 10, title: "紫蘇ソーダ" },
    { id: 11, title: "コーヒー檸檬ソーダ" },
    { id: 12, title: "抹茶ドリンク" },
    { id: 14, title: "ほうじ茶ラテ" },
    { id: 15, title: "桃とジュレジャムのパンナコッタ" },
  ];

  const sweetNav = [
    { id: 101, title: "バスクチーズケーキ（gf）" },
    { id: 102, title: "チョコバスク" },
    { id: 103, title: "ぜんざいアフォガード（gf）" },
    { id: 104, title: "チョコムースケーキ（gf）" },
    { id: 105, title: "焼き芋ブリュレバスク（gf）" },
    { id: 106, title: "カボチャのバスク（gf）" },
    { id: 107, title: "檸檬バスク" },
    { id: 108, title: "檸檬ゼリー" },
    { id: 109, title: "紅茶のバスク" },
    { id: 110, title: "ティラミス風バスク" },
    { id: 111, title: "ブルーベリーと米粉のクランブルチーズケーキ（gf）" },
    { id: 112, title: "黒糖ブリュレベイクドチーズケーキ（gf）" },
    { id: 121, title: "米粉のジンジャーナッツマフィン" },
    { id: 122, title: "米粉金柑とクリチのマフィン" },
    { id: 123, title: "チョコバナナマフィン" },
    { id: 125, title: "ブルーベリーとクリチのマフィン" },
    { id: 126, title: "こし餡とクリチの抹茶マフィン" },
  ];
  // 該当 id のストーリーにジャンプする関数
  const jumpToStory = (id: number) => {
    const index = stories.findIndex((item) => item.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };
  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 < stories.length ? prev + 1 : prev));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  const story = stories[currentIndex];

  return (
    <div className="menu-page">
      <div className="fixed-nav">
        <button onClick={() => openMenu("drink")}>
          <span>DRINK</span>
        </button>
        <button onClick={() => openMenu("sweet")}>
          <span>SWEET</span>
        </button>
      </div>

      {menuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <h3>{menuType === "drink" ? "Drink" : "Sweet"}</h3>
            <ul>
              {(menuType === "drink" ? drinkNav : sweetNav).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      jumpToStory(item.id);
                      closeMenu();
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div
        className="story-wrapper"
        style={{
          backgroundImage: `url(${story.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="story-content">{story.content}</div>

        <button className="story-hit-area left" onClick={goPrev} />
        <button className="story-hit-area right" onClick={goNext} />
      </div>
    </div>
  );
}
