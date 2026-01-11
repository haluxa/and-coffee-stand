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
  "/img/view/2008_night.jpg",
  "/img/view/2009_night.jpg",
  "/img/view/3001_view.jpg",
  "/img/view/3002_view.jpg",
  "/img/view/3003_view.jpg",
  "/img/view/3004_view.jpg",
  "/img/view/3005_view.jpg",
  "/img/view/3006_view.jpg",
  "/img/view/3007_view.jpg",
  "/img/view/3008_view.jpg",
  "/img/view/3009_view.jpg",
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
  "/img/view/6010_goods.jpg",
  "/img/view/6011_goods.jpg",
  "/img/view/6012_goods.jpg",
  "/img/view/7001_plant.jpg",
  "/img/view/7002_plant.jpg",
  "/img/view/7003_plant.jpg",
  "/img/view/7004_night.jpg",
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

export default function Slide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const slideGroups = useMemo(() => slideImages.map(getGroupFromSrc), []);
  const activeGroup = slideGroups[activeIndex] ?? "other";
  const activeLabel = GROUP_LABEL[activeGroup];

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
      className="slideContainer"
      style={{ touchAction: "auto" }}
    >
      {activeLabel ? (
        <div aria-hidden className="slideOverlay">
          <div className="slideBadge">{activeLabel}</div>
        </div>
      ) : null}

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
        id="prev-btn"
        role="button"
        aria-label="Previous"
        onClick={goPrev}
      ></div>
      <div id="next-btn" role="button" aria-label="Next" onClick={goNext}></div>
    </div>
  );
}
