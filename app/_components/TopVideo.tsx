"use client";

import { useRef } from "react";
import firstViewVideoSrc from "@/_assets/video/first_view.mp4";
import { useVideoAutoplay } from "./BackgroundVideo/useVideoAutoplay";
import { useMediaPowerSavingFallback } from "./BackgroundVideo/useMediaPowerSavingFallback";

export default function TopVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { shouldUseImage, reportAutoplayBlocked } = useMediaPowerSavingFallback();

  useVideoAutoplay(() => [videoRef.current], {
    onAutoplayBlocked: reportAutoplayBlocked,
  });

  if (shouldUseImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="top-movie" src="/mov/first_view-animated.webp" alt="" aria-hidden="true" />;
  }

  return (
    <video
      ref={videoRef}
      className="top-movie"
      src={firstViewVideoSrc}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
