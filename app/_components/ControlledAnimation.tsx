"use client";

import { useEffect, useRef, useState } from "react";
import { usePowerSavingPreference } from "./BackgroundVideo/useMediaPowerSavingFallback";

type ControlledAnimationProps = {
  className?: string;
  animationSrc: string;
  lowPowerAnimationSrc?: string;
  firstFrameSrc: string;
  lastFrameSrc: string;
  alt: string;
  width: number;
  height: number;
  durationMs: number;
  threshold?: number;
};

export default function ControlledAnimation({
  className,
  animationSrc,
  lowPowerAnimationSrc,
  firstFrameSrc,
  lastFrameSrc,
  alt,
  width,
  height,
  durationMs,
  threshold = 0.2,
}: ControlledAnimationProps) {
  const containerRef = useRef<HTMLImageElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);
  const [src, setSrc] = useState(firstFrameSrc);
  const shouldUseLowPowerAsset = usePowerSavingPreference();
  const activeAnimationSrc = shouldUseLowPowerAsset && lowPowerAnimationSrc
    ? lowPowerAnimationSrc
    : animationSrc;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasStartedRef.current) return;

        hasStartedRef.current = true;
        setSrc(`${activeAnimationSrc}?play=${Date.now()}`);

        timerRef.current = window.setTimeout(() => {
          setSrc(lastFrameSrc);
        }, durationMs);

        observer.unobserve(element);
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [activeAnimationSrc, durationMs, firstFrameSrc, lastFrameSrc, threshold]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={containerRef}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
