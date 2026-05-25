"use client";

import { usePathname } from "next/navigation";
import styles from "./bg.module.css";
import bgVideoSrc from "@/_assets/video/bg-leaves_shadow.mp4";

export default function BackgroundVideo() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div id={styles.bgVideoStack} aria-hidden="true">
      <div className={styles.bgVideoTrack}>
        {Array.from({ length: 4 }).map((_, index) => (
          <video
            key={index}
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
