"use client";

import { useEffect, useRef, useState } from "react";

type ControlledAnimationProps = {
  className?: string;
  animationSrc: string;
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

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasStartedRef.current) return;

        hasStartedRef.current = true;
        setSrc(`${animationSrc}?play=${Date.now()}`);

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
  }, [animationSrc, durationMs, firstFrameSrc, lastFrameSrc, threshold]);

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
