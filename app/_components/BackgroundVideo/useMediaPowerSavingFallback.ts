"use client";

import { useEffect, useState } from "react";

type ConnectionWithSaveData = EventTarget & {
  saveData?: boolean;
};

function getShouldUseImageFromEnvironment() {
  if (typeof window === "undefined") {
    return false;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const connection = (navigator as Navigator & {
    connection?: ConnectionWithSaveData;
  }).connection;

  return prefersReducedMotion || connection?.saveData === true;
}

export function useMediaPowerSavingFallback() {
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [shouldUseImage, setShouldUseImage] = useState(false);

  useEffect(() => {
    const update = () => {
      setShouldUseImage(getShouldUseImageFromEnvironment() || autoplayBlocked);
    };

    update();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: ConnectionWithSaveData;
    }).connection;

    mediaQuery.addEventListener("change", update);
    connection?.addEventListener?.("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
      connection?.removeEventListener?.("change", update);
    };
  }, [autoplayBlocked]);

  return {
    shouldUseImage,
    reportAutoplayBlocked: () => setAutoplayBlocked(true),
  };
}
