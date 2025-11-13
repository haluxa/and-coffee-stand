// app/story/page.tsx など
"use client";

import { useState, useCallback } from "react";

const stories = [
  {
    id: 1,
    content: (
      <div>
        <h3>コーヒー(ice)</h3>
        <p>
          珈琲豆はグレードの最も高いと言われる
          <br />
          “スペシャルティーコーヒー”を使用しております。
        </p>
      </div>
    ),
    bg: "/img/menu_image_coffee_ice.jpg",
  },
  {
    id: 2,
    content: (
      <div>
        <h3>コーヒー(hot)</h3>
      </div>
    ),
    bg: "/img/menu_image_coffee_hot.jpg",
  },
  {
    id: 3,
    content: (
      <div>
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
      </div>
    ),
    bg: "/img/menu_image_latte_hot.jpg",
  },
  {
    id: 4,
    content: (
      <div>
        <h3>ラテ(ice)</h3>
      </div>
    ),
    bg: "/img/menu_image_latte_ice.jpg",
  },
  {
    id: 5,
    content: (
      <div>
        <h3>メープルラテ</h3>
      </div>
    ),
    bg: "/img/menu_image_maple-latte.jpg",
  },
  {
    id: 6,
    content: (
      <div>
        <h3>エスプレッソトニック</h3>
        <span>※春夏限定</span>
        <p>
          エスプレッソとトニックウォーターを割った
          <br />
          新感覚のアレンジコーヒードリンク
          <br />
          柑橘系のグレープフルーツやジントニック系のお酒を思わせるような一杯。
        </p>
      </div>
    ),
    bg: "/img/menu_image_espresso-tonic.jpg",
  },
  {
    id: 7,
    content: (
      <div>
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
      </div>
    ),
    bg: "/img/menu_image_chai_hot.jpg",
  },
  {
    id: 8,
    content: (
      <div>
        <h3>チャイ(ice)</h3>
      </div>
    ),
    bg: "/img/menu_image_chai_ice.jpg",
  },
  {
    id: 9,
    content: (
      <div>
        <h3>ダークモカ</h3>
        <p>
          ダークチョコレートのほろ苦さとミルク、
          <br />
          コーヒーがマッチしたスイーツ系ドリンク
        </p>
      </div>
    ),
    bg: "/img/menu_image_dark-mocha.jpg",
  },
  {
    id: 10,
    content: (
      <div>
        <h4>紫蘇ソーダ</h4>
      </div>
    ),
    bg: "/img/menu_image_shiso-soda.jpg",
  },
  {
    id: 11,
    content: (
      <div>
        <h4>コーヒー檸檬ソーダ</h4>
      </div>
    ),
    bg: "/img/menu_image_coffee-lemon-soda.jpg",
  },
  {
    id: 12,
    content: (
      <div>
        <h4>抹茶ドリンク</h4>
      </div>
    ),
    bg: "/img/menu_image_matcha-drink.jpg",
  },
  {
    id: 13,
    content: (
      <div>
        <h4>ほうじ茶ラテ</h4>
      </div>
    ),
    bg: "/img/menu_image_hojicha-latte.jpg",
  },
  {
    id: 14,
    content: (
      <div>
        <h4>桃とジュレジャムのパンナコッタ</h4>
      </div>
    ),
    bg: "/img/menu_image_panna-cotta.jpg",
  },
  {
    id: 101,
    content: (
      <div>
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
      </div>
    ),
    bg: "/img/menu_image_Burnt-Basque-Cheesecake.jpg",
  },
  {
    id: 102,
    content: (
      <div>
        <h3>ぜんざいアフォガード（gf）</h3>
      </div>
    ),
    bg: "/img/menu_image_Zenzai-Affogato.jpg",
  },
  {
    id: 103,
    content: (
      <div>
        <h3>チョコムースケーキ（gf）</h3>
      </div>
    ),
    bg: "/img/menu_image_Chocolate-Mousse-Cake.jpg",
  },
  {
    id: 104,
    content: (
      <div>
        <h3>焼き芋ブリュレバスク（gf）</h3>
      </div>
    ),
    bg: "/img/menu_image_Baked-Sweet-Potato-Brulee-Basque.jpg",
  },
  {
    id: 105,
    content: (
      <div>
        <h3>カボチャのバスク（gf）</h3>
      </div>
    ),
    bg: "/img/menu_image_Pumpkin-Basque.jpg",
  },
  {
    id: 106,
    content: (
      <div>
        <h3>檸檬バスク</h3>
      </div>
    ),
    bg: "/img/menu_image_Lemon-Basque.jpg",
  },
  {
    id: 107,
    content: (
      <div>
        <h3>檸檬ゼリー</h3>
      </div>
    ),
    bg: "/img/menu_image_Lemon-Jelly.jpg",
  },
  {
    id: 108,
    content: (
      <div>
        <h3>紅茶のバスク</h3>
      </div>
    ),
    bg: "/img/menu_image_Tea-Basque.jpg",
  },
  {
    id: 109,
    content: (
      <div>
        <h3>ティラミス風バスク</h3>
      </div>
    ),
    bg: "/img/menu_image_Tiramisu-style-Basque.jpg",
  },
  {
    id: 110,
    content: (
      <div>
        <h3>ブルーベリーと米粉のクランブルチーズケーキ（gf）</h3>
      </div>
    ),
    bg: "/img/menu_image_Blueberry-and-Rice-Flour-Crumble-Cheesecake.jpg",
  },
  {
    id: 111,
    content: (
      <div>
        <h3>黒糖ブリュレベイクドチーズケーキ（gf）</h3>
      </div>
    ),
    bg: "/img/menu_image_Brown-Sugar-Brulee-Baked-Cheesecake.jpg",
  },
  {
    id: 112,
    content: (
      <div>
        <h4>米粉のジンジャーナッツマフィン</h4>
      </div>
    ),
    bg: "/img/menu_image_Ginger.jpg",
  },
  {
    id: 113,
    content: (
      <div>
        <h4>米粉金柑とクリチのマフィン</h4>
      </div>
    ),
    bg: "/img/menu_image_Kinkan.jpg",
  },
  {
    id: 115,
    content: (
      <div>
        <h4>チョコバナナマフィン</h4>
      </div>
    ),
    bg: "/img/menu_image_Choco-Banana-Muffin.jpg",
  },
  {
    id: 116,
    content: (
      <div>
        <h4>ブルーベリーとクリチのマフィン</h4>
      </div>
    ),
    bg: "/img/menu_image_Blueberry-and-Cream-Cheese-Muffin.jpg",
  },
  {
    id: 117,
    content: (
      <div>
        <h4>こし餡とクリチの抹茶マフィン</h4>
      </div>
    ),
    bg: "/img/menu_image_Matcha-Muffin.jpg",
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
    { id: 1, title: "コーヒー(ice)" },
    { id: 2, title: "コーヒー(hot)" },
    { id: 3, title: "ラテ(hot)" },
    { id: 4, title: "ラテ(ice)" },
    { id: 5, title: "メープルラテ" },
    { id: 6, title: "エスプレッソトニック" },
    { id: 7, title: "チャイ(hot)" },
    { id: 8, title: "チャイ(ice)" },
    { id: 9, title: "ダークモカ" },
    { id: 10, title: "紫蘇ソーダ" },
    { id: 11, title: "コーヒー檸檬ソーダ" },
    { id: 12, title: "抹茶ドリンク" },
    { id: 13, title: "ほうじ茶ラテ" },
    { id: 14, title: "桃とジュレジャムのパンナコッタ" },
  ];

  const sweetNav = [
    { id: 101, title: "バスクチーズケーキ（gf）" },
    { id: 102, title: "ぜんざいアフォガード（gf）" },
    { id: 103, title: "チョコムースケーキ（gf）" },
    { id: 104, title: "焼き芋ブリュレバスク（gf）" },
    { id: 105, title: "カボチャのバスク（gf）" },
    { id: 106, title: "檸檬バスク" },
    { id: 107, title: "檸檬ゼリー" },
    { id: 108, title: "紅茶のバスク" },
    { id: 109, title: "ティラミス風バスク" },
    { id: 110, title: "ブルーベリーと米粉のクランブルチーズケーキ（gf）" },
    { id: 111, title: "黒糖ブリュレベイクドチーズケーキ（gf）" },
    { id: 112, title: "米粉のジンジャーナッツマフィン" },
    { id: 113, title: "米粉金柑とクリチのマフィン" },
    { id: 115, title: "チョコバナナマフィン" },
    { id: 116, title: "ブルーベリーとクリチのマフィン" },
    { id: 117, title: "こし餡とクリチの抹茶マフィン" },
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
    <>
      <div className="fixed-nav">
        <button onClick={() => openMenu("drink")}>DRINK</button>
        <button onClick={() => openMenu("sweet")}>SWEET</button>
      </div>

      {menuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <h3>{menuType === "drink" ? "ドリンク" : "スイーツ"}</h3>
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
    </>
  );
}
