"use client";

import { useRef } from "react";
import styles from "./page.module.css";
import bgVideoSrc from "@/_assets/video/bg-leaves_shadow.mp4";
import { useVideoAutoplay } from "./useVideoAutoplay";
import { useMediaPowerSavingFallback } from "./useMediaPowerSavingFallback";

export default function BackgroundVideo() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const { shouldUseImage, reportAutoplayBlocked } = useMediaPowerSavingFallback();

  useVideoAutoplay(() => videoRefs.current, {
    onAutoplayBlocked: reportAutoplayBlocked,
  });

  return (
    <div id={styles.bgVideoStack} aria-hidden="true">
      <div className={styles.bgVideoTrack}>
        {Array.from({ length: 4 }).map((_, index) => (
          shouldUseImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src="/mov/bg-leaves_shadow-animated.webp"
              alt=""
              aria-hidden="true"
            />
          ) : (
            <video
              key={index}
              ref={(element) => {
                if (!element) return;
                videoRefs.current[index] = element;
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              src={bgVideoSrc}
            >
            </video>
          )
        ))}
      </div>
    </div>
  );
}
