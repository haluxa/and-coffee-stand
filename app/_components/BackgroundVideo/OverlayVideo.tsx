"use client";

import { useRef } from "react";
import bgVideoSrc from "@/_assets/video/bg-leaves_shadow.mp4";
import { useVideoAutoplay } from "./useVideoAutoplay";
import { useMediaPowerSavingFallback } from "./useMediaPowerSavingFallback";
import styles from "./overlay-video.module.css";

type OverlayVideoProps = {
  className?: string;
};

export default function OverlayVideo({ className }: OverlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { shouldUseImage, reportAutoplayBlocked } = useMediaPowerSavingFallback();

  useVideoAutoplay(() => [videoRef.current], {
    onAutoplayBlocked: reportAutoplayBlocked,
  });

  return (
    <div
      className={[styles.overlayVideo, className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      {shouldUseImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/mov/bg-leaves_shadow-animated.webp" alt="" aria-hidden="true" />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={bgVideoSrc}
        />
      )}
      <div className={styles.overlayTint} />
    </div>
  );
}
