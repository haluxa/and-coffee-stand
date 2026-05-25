"use client";

import { usePathname } from "next/navigation";
import styles from "./bg.module.css";

const BG_VIDEO_SRC =
  "https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413";

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
          >
            <source src={BG_VIDEO_SRC} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
}
