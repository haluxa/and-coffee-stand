"use client";

import firstViewVideoSrc from "@/_assets/video/first_view.mp4";

export default function TopVideo() {
  return (
    <video
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
