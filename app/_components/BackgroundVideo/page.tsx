"use client";

import { useRef } from "react";
import styles from "./page.module.css";
import bgVideoSrc from "@/_assets/video/bg-leaves_shadow.mp4";
import { useVideoAutoplay } from "./useVideoAutoplay";

export default function BackgroundVideo() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useVideoAutoplay(() => videoRefs.current);

  return (
    <div id={styles.bgVideoStack} aria-hidden="true">
      <div className={styles.bgVideoTrack}>
        {Array.from({ length: 4 }).map((_, index) => (
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
        ))}
      </div>
    </div>
  );
}
