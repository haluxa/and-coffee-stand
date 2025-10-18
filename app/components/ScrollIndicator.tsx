"use client";

import { useEffect, useState } from "react";

const SCROLL_HIDE_THRESHOLD = 120; // px

export default function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const update = () => {
      const nextHidden = window.scrollY > SCROLL_HIDE_THRESHOLD;
      setHidden(nextHidden);
    };

    update();

    const handleScroll = () => {
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`scroll-indicator${hidden ? " is-hidden" : ""}`}
      aria-hidden="true"
    >
      <span className="scroll-indicator__label">scroll</span>
      <div className="scroll-indicator__track">
        <div className="scroll-indicator__runner" />
      </div>
    </div>
  );
}
