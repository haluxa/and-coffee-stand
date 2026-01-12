"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const slideImages = [
  "/img/view/1001_gift.jpg",
  "/img/view/1002_gift.jpg",
  "/img/view/1003_gift.jpg",
  "/img/view/1004_gift.jpg",
  "/img/view/1005_gift.jpg",
  "/img/view/1006_gift.jpg",
  "/img/view/1007_gift.jpg",
  "/img/view/2001_night.jpg",
  "/img/view/2002_night.jpg",
  "/img/view/2003_night.jpg",
  "/img/view/2004_night.jpg",
  "/img/view/2005_night.jpg",
  "/img/view/2006_night.jpg",
  "/img/view/2007_night.jpg",
  "/img/view/3001_view.jpg",
  "/img/view/3002_view.jpg",
  "/img/view/3003_view.jpg",
  "/img/view/3004_view.jpg",
  "/img/view/3005_view.jpg",
  "/img/view/3006_view.jpg",
  "/img/view/4001_flower.jpg",
  "/img/view/4002_flower.jpg",
  "/img/view/4003_flower.jpg",
  "/img/view/4004_flower.jpg",
  "/img/view/4005_flower.jpg",
  "/img/view/4006_flower.jpg",
  "/img/view/4007_flower.jpg",
  "/img/view/4008_flower.jpg",
  "/img/view/4009_flower.jpg",
  "/img/view/4010_flower.jpg",
  "/img/view/5001_gift2.jpg",
  "/img/view/5002_gift2.jpg",
  "/img/view/5003_gift2.jpg",
  "/img/view/5004_gift2.jpg",
  "/img/view/5005_gift2.jpg",
  "/img/view/5006_gift2.jpg",
  "/img/view/5007_gift2.jpg",
  "/img/view/5008_gift2.jpg",
  "/img/view/6001_goods.jpg",
  "/img/view/6002_goods.jpg",
  "/img/view/6003_goods.jpg",
  "/img/view/6004_goods.jpg",
  "/img/view/6005_goods.jpg",
  "/img/view/6006_goods.jpg",
  "/img/view/6007_goods.jpg",
  "/img/view/6008_goods.jpg",
  "/img/view/6009_goods.jpg",
  "/img/view/6011_goods.jpg",
  "/img/view/6012_goods.jpg",
  "/img/view/7001_plant.jpg",
  "/img/view/7002_plant.jpg",
  "/img/view/7003_plant.jpg",
  "/img/view/7004_plant.jpg",
  "/img/view/7005_plant.jpg",
  "/img/view/7006_plant.jpg",
  "/img/view/7007_plant.jpg",
  "/img/view/7008_plant.jpg",
  "/img/view/7009_plant.jpg",
  "/img/view/7010_plant.jpg",
  "/img/view/7011_plant.jpg",
  "/img/view/7012_plant.jpg",
  "/img/view/7013_plant.jpg",
  "/img/view/7014_plant.jpg",
  "/img/view/7015_plant.jpg",
  "/img/view/7016_plant.jpg",
  "/img/view/7017_plant.jpg",
  "/img/view/7018_plant.jpg",
  "/img/view/8001.jpg",
  "/img/view/8002.jpg",
  "/img/view/8003.jpg",
  "/img/view/8004.jpg",
  "/img/view/8005.jpg",
  "/img/view/8006.jpg",
  "/img/view/8007.jpg",
  "/img/view/8008.jpg",
  "/img/view/8009.jpg",
  "/img/view/8010.jpg",
  "/img/view/8011.jpg",
  "/img/view/8101.jpg",
  "/img/view/8102.jpg",
  "/img/view/8201.jpg",
  "/img/view/8202.jpg",
  "/img/view/8203.jpg",
  "/img/view/8204.jpg",
  "/img/view/8401.jpg",
  "/img/view/8402.jpg",
  "/img/view/8501.jpg",
  "/img/view/8502.jpg",
  "/img/view/8503.jpg",
  "/img/view/8504.jpg",
  "/img/view/8505.jpg",
  "/img/view/8506.jpg",
  "/img/view/8601.jpg",
  "/img/view/8602.jpg",
  "/img/view/8701.jpg",
  "/img/view/8702.jpg",
  "/img/view/9001.jpg",
  "/img/view/9002.jpg",
  "/img/view/9003.jpg",
  "/img/view/9004.jpg",
  "/img/view/9005.jpg",
  "/img/view/9006.jpg",
];

type SlideGroup =
  | "gift"
  | "night"
  | "view"
  | "flower"
  | "gift2"
  | "goods"
  | "plant"
  | "event"
  | "food"
  | "drink"
  | "other";

const getGroupFromSrc = (src: string): SlideGroup => {
  const file = src.split("/").pop() ?? "";
  const m = file.match(
    /_(gift2|gift|night|view|flower|goods|plant|event|food|drink)\./i
  );
  const key = (m?.[1] ?? "").toLowerCase();

  if (!m) {
    const numMatch = file.match(/^(\d{4})/);
    if (numMatch) {
      const num = parseInt(numMatch[1], 10);
      if (num >= 8000 && num <= 8999) return "event";
      if (num >= 9000 && num <= 9999) return "food";
      return "other";
    }
    return "other";
  }

  switch (key) {
    case "gift":
    case "night":
    case "view":
    case "flower":
    case "gift2":
    case "goods":
    case "plant":
    case "event":
    case "food":
    case "drink":
      return key as SlideGroup;
    default:
      return "other";
  }
};

const GROUP_LABEL: Record<SlideGroup, string> = {
  gift: "GIFT",
  night: "NIGHT",
  view: "VIEW",
  flower: "FLOWER",
  gift2: "GIFT",
  goods: "GOODS",
  plant: "PLANT",
  event: "EVENT",
  food: "FOOD / DRINK",
  drink: "FOOD / DRINK",
  other: "",
};

const GROUP_DESC: Record<SlideGroup, string> = {
  gift: "ギフトの雰囲気を切り取ったスナップ。",
  night: "夜の光と空気感を集めた一枚。",
  view: "景色や外の気配が感じられるカット。",
  flower: "花の色と質感を主役にした写真。",
  gift2: "別のギフトシーンのまとめ。",
  goods: "店内の雑貨・小物の記録。",
  plant: "植物のディテールや緑のある瞬間。",
  event: "イベントや特別な日の記録。",
  food: "フードとドリンクの写真。",
  drink: "ドリンク中心の写真。",
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
    } else {
      document.body.classList.add("view-test_viewing");
    }
  }, [isNav]);

  const slideGroups = useMemo(() => slideImages.map(getGroupFromSrc), []);

  const groupStarts = useMemo(() => {
    const starts: Array<{ group: SlideGroup; index: number }> = [];
    slideGroups.forEach((g, i) => {
      if (!starts.some((s) => s.group === g))
        starts.push({ group: g, index: i });
    });
    return starts;
  }, [slideGroups]);

  const groupIndexByName = useMemo(() => {
    const m = new Map<SlideGroup, number>();
    groupStarts.forEach((s, idx) => m.set(s.group, idx));
    return m;
  }, [groupStarts]);

  const activeGroup = slideGroups[activeIndex] ?? "other";
  const activeLabel = GROUP_LABEL[activeGroup];
  const activeDesc = GROUP_DESC[activeGroup];
  const activeSrc = slideImages[activeIndex] ?? "";
  const activeFileName = activeSrc.split("/").pop() ?? "";

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

  const scrollToIndex = useCallback((index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    el.scrollTo({ left: index * w, behavior: "smooth" });
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(slideImages.length - 1, index));
      setActiveIndex(clamped);
      requestAnimationFrame(() => {
        scrollToIndex(clamped);
      });
    },
    [scrollToIndex]
  );

  const openIndex = useCallback(
    (idx: number) => {
      setIsNav(false);
      goToIndex(idx);
    },
    [goToIndex]
  );

  const openNav = useCallback(() => {
    setIsNav(true);
  }, []);

  const goNextGroup = useCallback(() => {
    if (groupStarts.length === 0) return;
    const cur = slideGroups[activeIndex] ?? "other";
    const curPos = groupIndexByName.get(cur) ?? 0;
    const nextPos = (curPos + 1) % groupStarts.length;
    const nextIndex = groupStarts[nextPos]?.index ?? 0;
    goToIndex(nextIndex);
  }, [activeIndex, groupIndexByName, groupStarts, goToIndex, slideGroups]);

  const goPrevGroup = useCallback(() => {
    if (groupStarts.length === 0) return;
    const cur = slideGroups[activeIndex] ?? "other";
    const curPos = groupIndexByName.get(cur) ?? 0;
    const prevPos = (curPos - 1 + groupStarts.length) % groupStarts.length;
    const prevIndex = groupStarts[prevPos]?.index ?? 0;
    goToIndex(prevIndex);
  }, [activeIndex, groupIndexByName, groupStarts, goToIndex, slideGroups]);

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % slideImages.length;
    scrollToIndex(next);
  }, [activeIndex, scrollToIndex]);

  const goPrev = useCallback(() => {
    const prev = (activeIndex - 1 + slideImages.length) % slideImages.length;
    scrollToIndex(prev);
  }, [activeIndex, scrollToIndex]);

  return (
    <div
      id="container"
      ref={rootRef}
      className="slideContainer"
      style={{ touchAction: "none" }}
    >
      {!isNav ? (
        <>
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
            aria-label="Tap: prev/next image. Swipe: change group. Swipe down: back to NAV"
            onPointerDown={(e) => {
              if (e.button != null && e.button !== 0) return;
              try {
                (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
              } catch {}
              pointerStartRef.current = { x: e.clientX, y: e.clientY };
              pointerLastRef.current = { x: e.clientX, y: e.clientY };
            }}
            onPointerMove={(e) => {
              if (!pointerStartRef.current) return;
              pointerLastRef.current = { x: e.clientX, y: e.clientY };
            }}
            onPointerCancel={(e) => {
              pointerStartRef.current = null;
              pointerLastRef.current = null;
              try {
                (e.currentTarget as HTMLElement).releasePointerCapture(
                  e.pointerId
                );
              } catch {}
            }}
            onPointerUp={(e) => {
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

              // swipe down: back to NAV
              if (dy >= 90 && absY > absX * 1.2) {
                openNav();
                return;
              }

              // swipe left/right: change group
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
        </>
      ) : null}

      {isNav ? (
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
      ) : null}
    </div>
  );
}
