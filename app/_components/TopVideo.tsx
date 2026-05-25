"use client";

import { useRef } from "react";
import firstViewVideoSrc from "@/_assets/video/first_view.mp4";
import { useVideoAutoplay } from "./BackgroundVideo/useVideoAutoplay";

export default function TopVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useVideoAutoplay(() => [videoRef.current]);

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
