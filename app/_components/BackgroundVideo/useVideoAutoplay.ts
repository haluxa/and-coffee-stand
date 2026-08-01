"use client";

import { useEffect } from "react";

type VideoTarget = HTMLVideoElement | null;
type UseVideoAutoplayOptions = {
  onAutoplayBlocked?: () => void;
};

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

export function useVideoAutoplay(
  getVideos: () => VideoTarget[],
  options: UseVideoAutoplayOptions = {}
) {
  useEffect(() => {
    let playbackCheckTimer: number | null = null;
    let hasReportedBlocked = false;

    const reportAutoplayBlocked = () => {
      if (hasReportedBlocked) return;
      hasReportedBlocked = true;
      options.onAutoplayBlocked?.();
    };

    const playVideos = () => {
      if (document.visibilityState === "hidden") {
        return;
      }

      if (playbackCheckTimer !== null) {
        window.clearTimeout(playbackCheckTimer);
      }

      getVideos().forEach((video) => {
        if (!video) return;

        prepareVideo(video);

        const playPromise = video.play();
        if (playPromise) {
          playPromise.catch(() => {
            // Mobile Safari can reject early; retry on the next lifecycle event.
            reportAutoplayBlocked();
          });
        }
      });

      playbackCheckTimer = window.setTimeout(() => {
        const autoplayBlocked = getVideos().some((video) => (
          video &&
          video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
          video.paused
        ));

        if (autoplayBlocked) {
          reportAutoplayBlocked();
        }
      }, 700);
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

      if (playbackCheckTimer !== null) {
        window.clearTimeout(playbackCheckTimer);
      }
    };
  }, [getVideos, options]);
}
