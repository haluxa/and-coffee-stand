"use client";

import { useEffect } from "react";

type VideoTarget = HTMLVideoElement | null;

function prepareVideo(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.autoplay = true;

  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");
  video.setAttribute("autoplay", "");
}

export function useVideoAutoplay(getVideos: () => VideoTarget[]) {
  useEffect(() => {
    const playVideos = () => {
      if (document.visibilityState === "hidden") {
        return;
      }

      getVideos().forEach((video) => {
        if (!video) return;

        prepareVideo(video);

        const playPromise = video.play();
        if (playPromise) {
          playPromise.catch(() => {
            // Mobile Safari can reject early; retry on the next lifecycle event.
          });
        }
      });
    };

    const videos = getVideos();
    videos.forEach((video) => {
      if (!video) return;

      prepareVideo(video);
      video.addEventListener("loadedmetadata", playVideos);
      video.addEventListener("canplay", playVideos);
    });

    playVideos();

    document.addEventListener("visibilitychange", playVideos);
    window.addEventListener("pageshow", playVideos);

    return () => {
      videos.forEach((video) => {
        if (!video) return;
        video.removeEventListener("loadedmetadata", playVideos);
        video.removeEventListener("canplay", playVideos);
      });

      document.removeEventListener("visibilitychange", playVideos);
      window.removeEventListener("pageshow", playVideos);
    };
  }, [getVideos]);
}
