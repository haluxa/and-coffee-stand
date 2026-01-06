"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
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
  // expected: /img/view/1001_gift.jpg
  const file = src.split("/").pop() ?? "";
  const m = file.match(
    /_(gift2|gift|night|view|flower|goods|plant|event|food|drink)\./i
  );
  const key = (m?.[1] ?? "").toLowerCase();

  if (!m) {
    // fallback: parse numeric prefix
    const numMatch = file.match(/^(\d{4})/);
    if (numMatch) {
      const num = parseInt(numMatch[1], 10);
      if (num >= 8000 && num <= 8999) {
        return "event";
      } else if (num >= 9000 && num <= 9999) {
        return "food";
      } else {
        return "other";
      }
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
      return key;
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

  const slideGroups = useMemo(() => slideImages.map(getGroupFromSrc), []);
  const activeGroup = slideGroups[activeIndex] ?? "other";
  const activeLabel = GROUP_LABEL[activeGroup];

  useEffect(() => {
    const slides = Array.from(
      document.querySelectorAll<HTMLLIElement>("#content1 .slider")
    );
    const nextBtn = document.querySelector<HTMLDivElement>("#next-btn");
    const prevBtn = document.querySelector<HTMLDivElement>("#prev-btn");

    if (!slides.length || !nextBtn || !prevBtn) return;

    const slideCount = slides.length;

    const lowerSlider = () => {
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
          const lowerSlideCount = (slideCount + i - 1) % slideCount;
          setActiveIndex(lowerSlideCount);

          slides[lowerSlideCount].animate(
            { translate: ["-100vw 0", "0 0"] },
            { duration: 800, easing: "ease", fill: "forwards" }
          );
          slides[i].animate(
            { translate: ["0 0", "100vw 0"] },
            { duration: 800, easing: "ease", fill: "forwards" }
          );

          slides[lowerSlideCount].classList.remove("non-active");
          slides[lowerSlideCount].style.pointerEvents = "none";
          nextBtn.style.pointerEvents = "none";
          prevBtn.style.pointerEvents = "none";

          slides[lowerSlideCount].classList.add("active");
          slides[i].classList.remove("active");
          slides[i].style.pointerEvents = "none";

          setTimeout(() => {
            slides[i].classList.add("non-active");
            slides[lowerSlideCount].style.pointerEvents = "auto";
            nextBtn.style.pointerEvents = "auto";
            prevBtn.style.pointerEvents = "auto";
          }, 800);

          break;
        }
      }
    };

    const upperSlider = () => {
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
          const upperSlideCount = (i + 1) % slideCount;
          setActiveIndex(upperSlideCount);

          slides[upperSlideCount].animate(
            { translate: ["100vw 0", "0 0"] },
            { duration: 800, easing: "ease", fill: "forwards" }
          );
          slides[i].animate(
            { translate: ["0 0", "-100vw 0"] },
            { duration: 800, easing: "ease", fill: "forwards" }
          );

          slides[upperSlideCount].classList.remove("non-active");
          slides[upperSlideCount].style.pointerEvents = "none";
          nextBtn.style.pointerEvents = "none";
          prevBtn.style.pointerEvents = "none";

          slides[upperSlideCount].classList.add("active");
          slides[i].classList.remove("active");
          slides[i].style.pointerEvents = "none";

          setTimeout(() => {
            slides[i].classList.add("non-active");
            slides[upperSlideCount].style.pointerEvents = "auto";
            nextBtn.style.pointerEvents = "auto";
            prevBtn.style.pointerEvents = "auto";
          }, 800);

          break;
        }
      }
    };

    let startX: number | null = null;
    let endX: number | null = null;

    const logSwipeStart = (event: TouchEvent) => {
      event.preventDefault();
      startX = event.touches[0].pageX;
    };

    const logSwipe = (event: TouchEvent) => {
      event.preventDefault();
      endX = event.touches[0].pageX;
    };

    const logSwipeEnd = (event: TouchEvent) => {
      event.preventDefault();
      if (startX == null || endX == null) return;
      const diff = endX - startX;
      if (Math.abs(diff) < 30) return;
      if (diff > 0) {
        lowerSlider();
      } else {
        upperSlider();
      }
      startX = null;
      endX = null;
    };

    slides.forEach((el) => {
      el.addEventListener("touchstart", logSwipeStart, { passive: false });
      el.addEventListener("touchmove", logSwipe, { passive: false });
      el.addEventListener("touchend", logSwipeEnd, { passive: false });
    });

    nextBtn.addEventListener("click", upperSlider);
    prevBtn.addEventListener("click", lowerSlider);

    return () => {
      slides.forEach((el) => {
        el.removeEventListener("touchstart", logSwipeStart);
        el.removeEventListener("touchmove", logSwipe);
        el.removeEventListener("touchend", logSwipeEnd);
      });
      nextBtn.removeEventListener("click", upperSlider);
      prevBtn.removeEventListener("click", lowerSlider);
    };
  }, []);

  // ← useEffect の中身はそのまま（スワイプ・ボタン処理）

  return (
    <div id="container" className="slideContainer">
      {activeLabel ? (
        <div aria-hidden className="slideOverlay">
          <div className="slideBadge">{activeLabel}</div>
        </div>
      ) : null}
      <ul id="content1">
        {slideImages.map((src, index) => (
          <li
            key={index}
            className={`slider ${index === 0 ? "active" : "non-active"}`}
          >
            <Image
              src={src}
              alt={`slide-${index + 1}`}
              width={800}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </li>
        ))}
      </ul>
      <div id="prev-btn"></div>
      <div id="next-btn"></div>
    </div>
  );
}
