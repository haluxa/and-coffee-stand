"use client";

import { useEffect } from "react";

export default function Slide() {
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
      if (0 < endX - startX) {
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

  return (
    <div id="container">
      <ul id="content1">
        <li className="slider active">1</li>
        <li className="slider non-active">2</li>
        <li className="slider non-active">3</li>
        <li className="slider non-active">4</li>
        <li className="slider non-active">5</li>
      </ul>
      <div id="prev-btn"></div>
      <div id="next-btn"></div>
    </div>
  );
}
