"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const slideImages = [
  // 01 オリジナルグッズ
  "/img/gallery/01_01_01.jpg",
  "/img/gallery/01_01_02.jpg",
  "/img/gallery/01_01_03.jpg",
  "/img/gallery/01_02_01.jpg",
  "/img/gallery/01_03_01.jpg",
  "/img/gallery/01_03_02.jpg",
  "/img/gallery/01_04_01.jpg",
  "/img/gallery/01_04_02.jpg",
  "/img/gallery/01_04_03.jpg",
  "/img/gallery/01_06_01.jpg",
  "/img/gallery/01_06_02.jpg",
  "/img/gallery/01_07_01.jpg",

  // 02 イベント
  "/img/gallery/02_01_01.jpg",
  "/img/gallery/02_01_02.jpg",
  "/img/gallery/02_02_01.jpg",
  "/img/gallery/02_02_02.jpg",
  "/img/gallery/02_02_03.jpg",
  "/img/gallery/02_03_01.jpg",
  "/img/gallery/02_03_02.jpg",
  "/img/gallery/02_04_01.jpg",
  "/img/gallery/02_04_02.jpg",
  "/img/gallery/02_04_03.jpg",
  "/img/gallery/02_04_04.jpg",
  "/img/gallery/02_04_05.jpg",
  "/img/gallery/02_04_06.jpg",
  "/img/gallery/02_05_01.jpg",
  "/img/gallery/02_05_02.jpg",
  "/img/gallery/02_05_03.jpg",
  "/img/gallery/02_06_01.jpg",
  "/img/gallery/02_07_01.jpg",
  "/img/gallery/02_07_02.jpg",
  "/img/gallery/02_08_01.jpg",
  "/img/gallery/02_08_02.jpg",
  "/img/gallery/02_09_01.jpg",
  "/img/gallery/02_09_02.jpg",
  "/img/gallery/02_10_01.jpg",
  "/img/gallery/02_10_02.jpg",
  "/img/gallery/02_10_03.jpg",
  "/img/gallery/02_10_04.jpg",
  "/img/gallery/02_10_05.jpg",
  "/img/gallery/02_10_06.jpg",
  "/img/gallery/02_11_01.jpg",
  "/img/gallery/02_12_01.jpg",
  "/img/gallery/02_12_02.jpg",

  // 03 店内
  "/img/gallery/03_01_01.jpg",
  "/img/gallery/03_02_01.jpg",
  "/img/gallery/03_03_01.jpg",
  "/img/gallery/03_04_01.jpg",
  "/img/gallery/03_05_01.jpg",

  // 04 植物
  "/img/gallery/04_01_01.jpg",
  "/img/gallery/04_01_02.jpg",
  "/img/gallery/04_01_03.jpg",
  "/img/gallery/04_02_01.jpg",
  "/img/gallery/04_02_02.jpg",
  "/img/gallery/04_02_03.jpg",
  "/img/gallery/04_02_04.jpg",
  "/img/gallery/04_02_05.jpg",
  "/img/gallery/04_02_06.jpg",
  "/img/gallery/04_02_07.jpg",
  "/img/gallery/04_02_08.jpg",
  "/img/gallery/04_03_01.jpg",
  "/img/gallery/04_04_01.jpg",

  // 05 ドリップバック
  "/img/gallery/05_01_01.jpg",
  "/img/gallery/05_02_01.jpg",
  "/img/gallery/05_03_01.jpg",
  "/img/gallery/05_04_01.jpg",
  "/img/gallery/05_05_01.jpg",

  // 06 周年お祝い
  "/img/gallery/06_01_01.jpg",
  "/img/gallery/06_02_01.jpg",
  "/img/gallery/06_03_01.jpg",
  "/img/gallery/06_03_02.jpg",
  "/img/gallery/06_04_01.jpg",
  "/img/gallery/06_05_01.jpg",
  "/img/gallery/06_07_01.jpg",
  "/img/gallery/06_09_01.jpg",

  // 07 物販
  "/img/gallery/07_01_01.jpg",
  "/img/gallery/07_02_01.jpg",
  "/img/gallery/07_03_01.jpg",
  "/img/gallery/07_03_02.jpg",
  "/img/gallery/07_03_04.jpg",
  "/img/gallery/07_04_01.jpg",
  "/img/gallery/07_05_01.jpg",
  "/img/gallery/07_06_01.jpg",
];

type MajorGroup = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "other";

type SubGroup =
  | "01_01"
  | "01_02"
  | "01_03"
  | "01_04"
  | "01_05"
  | "01_06"
  | "01_07"
  | "02_01"
  | "02_02"
  | "02_03"
  | "02_04"
  | "02_05"
  | "02_06"
  | "02_07"
  | "02_08"
  | "02_09"
  | "02_10"
  | "02_11"
  | "02_12"
  | "03_01"
  | "03_02"
  | "03_03"
  | "03_04"
  | "03_05"
  | "04_01"
  | "04_02"
  | "04_03"
  | "04_04"
  | "05_01"
  | "05_02"
  | "05_03"
  | "05_04"
  | "05_05"
  | "06_01"
  | "06_02"
  | "06_03"
  | "06_04"
  | "06_05"
  | "06_06"
  | "06_07"
  | "06_08"
  | "06_09"
  | "06_10"
  | "07_01"
  | "07_02"
  | "07_03"
  | "07_04"
  | "07_05"
  | "07_06"
  | "other";

const getMajorFromSrc = (src: string): MajorGroup => {
  const file = src.split("/").pop() ?? "";
  const m = file.match(/^(\d{2})_(\d{2})_(\d{2})\./);
  const major = m?.[1] ?? "";
  if (
    major === "01" ||
    major === "02" ||
    major === "03" ||
    major === "04" ||
    major === "05" ||
    major === "06" ||
    major === "07"
  ) {
    return major as MajorGroup;
  }
  return "other";
};

const getSubFromSrc = (src: string): SubGroup => {
  const file = src.split("/").pop() ?? "";
  const m = file.match(/^(\d{2})_(\d{2})_(\d{2})\./);
  if (!m) return "other";
  const key = `${m[1]}_${m[2]}`;
  switch (key) {
    case "01_01":
    case "01_02":
    case "01_03":
    case "01_04":
    case "01_05":
    case "01_06":
    case "01_07":
    case "02_01":
    case "02_02":
    case "02_03":
    case "02_04":
    case "02_05":
    case "02_06":
    case "02_07":
    case "02_08":
    case "02_09":
    case "02_10":
    case "02_11":
    case "02_12":
    case "03_01":
    case "03_02":
    case "03_03":
    case "03_04":
    case "03_05":
    case "04_01":
    case "04_02":
    case "04_03":
    case "04_04":
    case "05_01":
    case "05_02":
    case "05_03":
    case "05_04":
    case "05_05":
    case "06_01":
    case "06_02":
    case "06_03":
    case "06_04":
    case "06_05":
    case "06_06":
    case "06_07":
    case "06_08":
    case "06_09":
    case "06_10":
    case "07_01":
    case "07_02":
    case "07_03":
    case "07_04":
    case "07_05":
    case "07_06":
      return key as SubGroup;
    default:
      return "other";
  }
};

const MAJOR_LABEL: Record<MajorGroup, string> = {
  "01": "オリジナルグッズ",
  "02": "イベント",
  "03": "店内",
  "04": "植物",
  "05": "ドリップバック",
  "06": "周年お祝い",
  "07": "物販",
  other: "",
};

const SUB_TITLE: Record<SubGroup, string> = {
  "01_01": "オリジナルTシャツ",
  "01_02": "オリジナルキャップ",
  "01_03": "オリジナルマグカップ",
  "01_04": "オリジナルロンT",
  "01_05": "オリジナルグッズ（保留）",
  "01_06": "オリジナルキーホルダー",
  "01_07": "オリジナルステッカー",

  "02_01": "カボス詰め放題",
  "02_02": "キヨタキストア",
  "02_03": "しぶ個展",
  "02_04": "夜カフェ",
  "02_05": "植物展示会",
  "02_06": "靴磨き職人",
  "02_07": "ヘラクレスの会",
  "02_08": "子供店長の日",
  "02_09": "アンカー",
  "02_10": "リビルダー",
  "02_11": "母の日",
  "02_12": "担々麺",

  "03_01": "店内席の写真",
  "03_02": "店内席の写真",
  "03_03": "店内席の写真",
  "03_04": "店内席の写真",
  "03_05": "店内席の写真",

  "04_01": "植物",
  "04_02": "植物",
  "04_03": "植物",
  "04_04": "植物",

  "05_01": "ドリップバック",
  "05_02": "ドリップバック（クリスマス）",
  "05_03": "ドリップバック（ハロウィン）",
  "05_04": "ドリップバック（母の日）",
  "05_05": "ドリップバック",

  "06_01": "周年お祝い",
  "06_02": "周年お祝い",
  "06_03": "周年お祝い",
  "06_04": "周年お祝い",
  "06_05": "周年お祝い",
  "06_06": "周年お祝い",
  "06_07": "周年お祝い",
  "06_08": "周年お祝い",
  "06_09": "周年お祝い",
  "06_10": "周年お祝い",

  "07_01": "米粉シフォン",
  "07_02": "水出しコーヒー",
  "07_03": "チャイ＆ボンソイ",
  "07_04": "チョコ",
  "07_05": "ヘアオイル",
  "07_06": "豆乳",
  other: "",
};

const SUB_DESC: Record<SubGroup, string> = {
  "01_01":
    "オリジナルデザインのTシャツはたくさんのご予約ありがとうございました",
  "01_02": "４色どれも可愛かったオリジナルキャップ",
  "01_03": "お家でのコーヒータイムに",
  "01_04": "全て手書きのオリジナルデザイン",
  "01_05": "。",
  "01_06": "気まぐれでデザインするオリジナルグッズ",
  "01_07": "お持ちの方限定で何かしらの特典が受けられるステッカー♪",

  "02_01": "農薬・化学肥料不使用で今後もゲリラ開催予定♪",
  "02_02": "珈琲飲みながら可愛い雑貨をーー 古道具屋さんとのコラボイベント",
  "02_03": "初の個展開催 オリジナルロンTもたくさんご予約頂きました",
  "02_04":
    "不定期で開催する夜カフェ。夜ならお仕事終わりでもゆっくり楽しんでいただけます。いつもと違った雰囲気をぜひお楽しみください",
  "02_05":
    "植物屋さんをお招きしてコラボイベントし、珍しいものをたくさん持ってきていただきました",
  "02_06": "靴磨き職人をお招きしてコラボイベント",
  "02_07":
    "昆虫好きの息子によるイベント♪子供達同士でもコミュニティができたら嬉しいです",
  "02_08": "お金を稼ぐことの大変さを学んだ日でした",
  "02_09": "パラコードのワークショップ",
  "02_10": "当店が古着屋さんに。ロゴデザインもカラーもオリジナルで！",
  "02_11": "豚汁屋さんの味噌玉とお花屋さんとの母の日コラボ",
  "02_12": "まさかの担々麺屋さんが当店に！この日だけのスペシャルコース",

  "03_01": "壁面のローテーブルで読書タイムもぜひ",
  "03_02": "壁面のローテーブルは1人から3人までがオススメ",
  "03_03":
    "座り心地の良いハイチェアは作業もはかどるので珈琲と一緒に作業時間にも",
  "03_04": "当店はほとんどの席が2人掛けなので少人数にオススメのお店です",
  "03_05": "窓側のテーブル席のみ、3、4人でお座りいただけます",

  "04_01": "趣味である植物もどんどん増えてきました",
  "04_02": "お気に入りのビカクシダは板付からセルフで",
  "04_03": "オープンからずっと元気なサンスベリア",
  "04_04": "シェルフも手作り",

  "05_01":
    "手軽にお家でも珈琲が楽しめる。ドリップバッグは3種の飲み比べセットがオススメ",
  "05_02": "クリスマスバージョンデザインのドリップバッグ",
  "05_03": "プチギフトにオススメ",
  "05_04": "プチギフトにオススメ",
  "05_05": "ノベルティーでお渡していた限定ドリップバック",

  "06_01": "いつも応援してくださってありがとうございます",
  "06_02": "いつも遠くからありがとう",
  "06_03": "手紙付きでお祝いをありがとう",
  "06_04": "何度も足を運んでくださるお客様から",
  "06_05": "字が少し書けるようになった息子から",
  "06_06": "",
  "06_07": "お客様から特別な存在に",
  "06_08": "",
  "06_09": "いつも応援してくださってありがとうございます",
  "06_10": "",

  "07_01": "気まぐれで登場する米粉のシフォンはふわもちで好評♪",
  "07_02": "お家で簡単にアイスコーヒーが楽しめる水出し珈琲は夏季限定！",
  "07_03": "デカフェのチャイと相性抜群の豆乳ボンソイは女性に人気です",
  "07_04": "※文章が入ります。※",
  "07_05": "※文章が入ります。※",
  "07_06": "ラテもプラス料金で豆乳に変更できます",

  other: "",
};

export default function Slide() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const pointerLastRef = useRef<{ x: number; y: number } | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isNav, setIsNav] = useState(true);

  // Viewer sheet drag/fade (Instagram-like)
  const [sheetY, setSheetY] = useState(0);
  const [isSheetDragging, setIsSheetDragging] = useState(false);
  const [isGroupFading, setIsGroupFading] = useState(false);
  // Story autoplay progress (current segment only)
  const STORY_DURATION_MS = 4500; // 1枚あたりの表示時間
  const [storyProgress, setStoryProgress] = useState(0); // 0..1
  const storyRafRef = useRef<number | null>(null);
  const storyStartTsRef = useRef<number | null>(null);
  const isPointerDownRef = useRef(false);

  const getSheetHeight = useCallback(() => {
    const root = rootRef.current;
    return root?.clientHeight ?? window.innerHeight;
  }, []);

  useEffect(() => {
    document.body.classList.add("view-test_page");
    return () => {
      document.body.classList.remove("view-test_page");
      document.body.classList.remove("view-test_viewing");
    };
  }, []);

  useEffect(() => {
    // When viewing slides (not NAV), lock page scroll like Instagram stories.
    if (isNav) {
      document.body.classList.remove("view-test_viewing");
      setSheetY(getSheetHeight());
    } else {
      document.body.classList.add("view-test_viewing");
      setSheetY(0);
    }
    setIsSheetDragging(false);
  }, [isNav, getSheetHeight]);

  const majorGroups = useMemo(() => slideImages.map(getMajorFromSrc), []);
  const subGroups = useMemo(() => slideImages.map(getSubFromSrc), []);

  const groupStarts = useMemo(() => {
    const starts: Array<{ group: MajorGroup; index: number }> = [];
    majorGroups.forEach((g, i) => {
      if (!starts.some((s) => s.group === g))
        starts.push({ group: g, index: i });
    });
    return starts;
  }, [majorGroups]);

  const groupIndexByName = useMemo(() => {
    const m = new Map<MajorGroup, number>();
    groupStarts.forEach((s, idx) => m.set(s.group, idx));
    return m;
  }, [groupStarts]);

  const activeMajor = majorGroups[activeIndex] ?? "other";
  const activeSub = subGroups[activeIndex] ?? "other";

  const activeLabel = SUB_TITLE[activeSub] || MAJOR_LABEL[activeMajor];
  const activeDesc = SUB_DESC[activeSub];
  const activeSrc = slideImages[activeIndex] ?? "";
  const activeFileName = activeSrc.split("/").pop() ?? "";

  // Story progress (per major group)
  const activeGroupIndices = useMemo(() => {
    const indices: number[] = [];
    for (let i = 0; i < majorGroups.length; i++) {
      if (majorGroups[i] === activeMajor) indices.push(i);
    }
    return indices;
  }, [activeMajor, majorGroups]);

  const activeGroupPos = useMemo(() => {
    const pos = activeGroupIndices.indexOf(activeIndex);
    return pos >= 0 ? pos : 0;
  }, [activeGroupIndices, activeIndex]);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const el = containerRef.current;
      if (!el) return;
      const w = el.clientWidth || 1;
      el.scrollTo({ left: index * w, behavior });
    },
    []
  );

  const goNext = useCallback(() => {
    setStoryProgress(0);
    storyStartTsRef.current = null;
    const next = (activeIndex + 1) % slideImages.length;
    scrollToIndex(next, "smooth");
  }, [activeIndex, scrollToIndex]);

  const goPrev = useCallback(() => {
    setStoryProgress(0);
    storyStartTsRef.current = null;
    const prev = (activeIndex - 1 + slideImages.length) % slideImages.length;
    scrollToIndex(prev, "smooth");
  }, [activeIndex, scrollToIndex]);

  // Autoplay the active segment like Instagram Stories
  useEffect(() => {
    // reset whenever image or group changes
    setStoryProgress(0);
    storyStartTsRef.current = null;

    if (storyRafRef.current != null) {
      cancelAnimationFrame(storyRafRef.current);
      storyRafRef.current = null;
    }

    // do not autoplay while NAV is visible
    if (isNav) return;

    const tick = (ts: number) => {
      // stop if we returned to NAV
      if (isNav) return;

      // pause while dragging sheet, fading between groups, or touching the screen
      if (isSheetDragging || isGroupFading || isPointerDownRef.current) {
        storyStartTsRef.current = null; // re-sync after pause
        storyRafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (storyStartTsRef.current == null) storyStartTsRef.current = ts;
      const elapsed = ts - storyStartTsRef.current;
      const p = Math.min(1, elapsed / STORY_DURATION_MS);
      setStoryProgress(p);

      if (p >= 1) {
        // advance and let the next effect run (it will reset progress)
        storyStartTsRef.current = null;
        setStoryProgress(0);
        goNext();
        return;
      }

      storyRafRef.current = requestAnimationFrame(tick);
    };

    storyRafRef.current = requestAnimationFrame(tick);

    return () => {
      if (storyRafRef.current != null) {
        cancelAnimationFrame(storyRafRef.current);
        storyRafRef.current = null;
      }
      storyStartTsRef.current = null;
    };
  }, [activeIndex, activeMajor, isNav, isSheetDragging, isGroupFading, goNext]);

  const updateActiveIndexFromScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    const i = Math.round(el.scrollLeft / w);
    const clamped = Math.max(0, Math.min(slideImages.length - 1, i));
    setActiveIndex(clamped);
  }, []);

  const onScroll = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateActiveIndexFromScroll);
  }, [updateActiveIndexFromScroll]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateActiveIndexFromScroll();

    const onResize = () => {
      const w = el.clientWidth || 1;
      el.scrollTo({ left: activeIndex * w });
      updateActiveIndexFromScroll();
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex, updateActiveIndexFromScroll]);

  const goToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const clamped = Math.max(0, Math.min(slideImages.length - 1, index));
      setActiveIndex(clamped);
      requestAnimationFrame(() => {
        scrollToIndex(clamped, behavior);
      });
    },
    [scrollToIndex]
  );

  const jumpGroupToIndex = useCallback(
    (index: number) => {
      // Fade out quickly, jump instantly, then fade in.
      setIsGroupFading(true);
      setStoryProgress(0);
      storyStartTsRef.current = null;
      window.setTimeout(() => {
        goToIndex(index, "auto");
        window.setTimeout(() => setIsGroupFading(false), 140);
      }, 80);
    },
    [goToIndex]
  );

  const openIndex = useCallback(
    (idx: number) => {
      setIsNav(false);
      setIsSheetDragging(false);
      setSheetY(0);
      setStoryProgress(0);
      storyStartTsRef.current = null;
      goToIndex(idx, "auto");
    },
    [goToIndex]
  );

  const openNav = useCallback(() => {
    setIsNav(true);
    setIsSheetDragging(false);
    setSheetY(getSheetHeight());
    setStoryProgress(0);
    storyStartTsRef.current = null;
  }, [getSheetHeight]);

  const goNextGroup = useCallback(() => {
    if (groupStarts.length === 0) return;
    const cur = majorGroups[activeIndex] ?? "other";
    const curPos = groupIndexByName.get(cur) ?? 0;
    const nextPos = (curPos + 1) % groupStarts.length;
    const nextIndex = groupStarts[nextPos]?.index ?? 0;
    jumpGroupToIndex(nextIndex);
  }, [
    activeIndex,
    groupIndexByName,
    groupStarts,
    jumpGroupToIndex,
    majorGroups,
  ]);

  const goPrevGroup = useCallback(() => {
    if (groupStarts.length === 0) return;
    const cur = majorGroups[activeIndex] ?? "other";
    const curPos = groupIndexByName.get(cur) ?? 0;
    const prevPos = (curPos - 1 + groupStarts.length) % groupStarts.length;
    const prevIndex = groupStarts[prevPos]?.index ?? 0;
    jumpGroupToIndex(prevIndex);
  }, [
    activeIndex,
    groupIndexByName,
    groupStarts,
    jumpGroupToIndex,
    majorGroups,
  ]);

  return (
    <div
      id="container"
      ref={rootRef}
      className="slideContainer"
      style={{ touchAction: "none" }}
    >
      {/* NAV stays underneath */}
      <div
        className="slideNav"
        role="navigation"
        aria-label="Gallery navigation"
      >
        <div className="navGrid navGrid--all">
          {slideImages.map((src, idx) => (
            <button
              key={src}
              type="button"
              className="navItem navItem--thumb"
              onClick={() => openIndex(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <span className="navThumb navThumb--tight">
                <Image
                  src={src}
                  alt={`thumb-${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 20vw, 120px"
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Viewer sheet (slides) */}
      <div
        className={`viewerSheet ${isSheetDragging ? "isDragging" : ""} ${
          isGroupFading ? "isGroupFading" : ""
        }`}
        style={{
          transform: `translate3d(0, ${isNav ? "100%" : `${sheetY}px`}, 0)`,
        }}
        aria-hidden={isNav}
      >
        {/* Instagram-like progress bar (per group) */}
        {activeGroupIndices.length > 0 ? (
          <div className="storyProgress" aria-hidden>
            {activeGroupIndices.map((_, i) => {
              const isDone = i < activeGroupPos;
              const isActive = i === activeGroupPos;
              const width = isDone
                ? 100
                : isActive
                ? Math.round(storyProgress * 100)
                : 0;

              return (
                <span
                  key={i}
                  className={`storyProgressSeg ${
                    isDone ? "isDone" : isActive ? "isActive" : ""
                  }`}
                >
                  <span
                    className="storyProgressFill"
                    style={{ width: `${width}%` }}
                  />
                </span>
              );
            })}
          </div>
        ) : null}

        {activeLabel ? (
          <div aria-hidden className="slideOverlay">
            <div className="slideBadge">
              <h2 className="slideTitle">{activeLabel}</h2>
              {activeDesc ? <p className="slideDesc">{activeDesc}</p> : null}
            </div>
          </div>
        ) : null}

        <p className="slideFile" aria-hidden>
          {activeFileName}
        </p>

        <ul id="content1" ref={containerRef} onScroll={onScroll}>
          {slideImages.map((src, index) => (
            <li
              key={src}
              className={`slider ${
                index === activeIndex ? "active" : "non-active"
              }`}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={src}
                alt={`slide-${index + 1}`}
                priority={index === 0}
                draggable={false}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </li>
          ))}
        </ul>

        <div
          className="storyLayer"
          role="button"
          aria-label="Tap: prev/next image. Swipe: change group. Pull down: back to NAV"
          onPointerDown={(e) => {
            if (e.button != null && e.button !== 0) return;
            try {
              (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            } catch {}
            pointerStartRef.current = { x: e.clientX, y: e.clientY };
            pointerLastRef.current = { x: e.clientX, y: e.clientY };
            setIsSheetDragging(false);
            isPointerDownRef.current = true;
          }}
          onPointerMove={(e) => {
            const start = pointerStartRef.current;
            if (!start) return;
            pointerLastRef.current = { x: e.clientX, y: e.clientY };

            const dx = e.clientX - start.x;
            const dy = e.clientY - start.y;
            const absX = Math.abs(dx);
            const absY = Math.abs(dy);

            // Pull down gesture: move the sheet to reveal NAV underneath.
            if (dy > 0 && absY > absX * 1.1) {
              setIsSheetDragging(true);
              const h = getSheetHeight();
              const clamped = Math.max(0, Math.min(h, dy));
              setSheetY(clamped);
            }
          }}
          onPointerCancel={(e) => {
            isPointerDownRef.current = false;
            pointerStartRef.current = null;
            pointerLastRef.current = null;
            setIsSheetDragging(false);
            try {
              (e.currentTarget as HTMLElement).releasePointerCapture(
                e.pointerId
              );
            } catch {}
          }}
          onPointerUp={(e) => {
            isPointerDownRef.current = false;
            const start = pointerStartRef.current;
            const last = pointerLastRef.current;
            pointerStartRef.current = null;
            pointerLastRef.current = null;
            try {
              (e.currentTarget as HTMLElement).releasePointerCapture(
                e.pointerId
              );
            } catch {}
            if (!start || !last) return;

            const dx = last.x - start.x;
            const dy = last.y - start.y;
            const absX = Math.abs(dx);
            const absY = Math.abs(dy);

            // If we were pulling down, decide whether to go to NAV.
            if (isSheetDragging) {
              const h = getSheetHeight();
              if (sheetY >= Math.min(160, h * 0.22)) {
                openNav();
              } else {
                setSheetY(0);
              }
              setIsSheetDragging(false);
              return;
            }

            // swipe left/right: change group (no intermediate scroll)
            if (absX >= 60 && absX > absY * 1.2) {
              if (dx < 0) goNextGroup();
              else goPrevGroup();
              return;
            }

            // tap: image move (left half = prev, right half = next)
            const root = rootRef.current;
            const width = root?.clientWidth ?? window.innerWidth;
            if (last.x >= width / 2) goNext();
            else goPrev();
          }}
        />

        <button
          type="button"
          className="navFab"
          aria-label="Open navigation"
          onClick={openNav}
        >
          NAV
        </button>
      </div>
    </div>
  );
}
