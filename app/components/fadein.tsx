"use client";
import { useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
  threshold?: number;
  delayStep?: number; // ミリ秒単位。バッチ内での要素間の待ち時間
  group?: string;     // 同グループ内の要素だけで順番をリセット
}>;

type ElementMeta = {
  delayStep: number;
  timers: number[];
};

type ObserverRecord = {
  observer: IntersectionObserver;
  elements: Map<HTMLElement, ElementMeta>;
};

const DEFAULT_GROUP = "__fade-default__";
const observerRecords = new Map<string, ObserverRecord>();

function getObserverRecord(threshold: number): ObserverRecord {
  const key = `${threshold}`;
  const existing = observerRecords.get(key);

  if (existing) {
    return existing;
  }

  const elements = new Map<HTMLElement, ElementMeta>();
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length === 0) return;

      const grouped = new Map<string, IntersectionObserverEntry[]>();
      visible.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const group = el.dataset.fadeGroup ?? DEFAULT_GROUP;
        const bucket = grouped.get(group);
        if (bucket) {
          bucket.push(entry);
        } else {
          grouped.set(group, [entry]);
        }
      });

      grouped.forEach((groupEntries) => {
        groupEntries
          .sort(
            (a, b) =>
              (a.target as HTMLElement).getBoundingClientRect().top -
              (b.target as HTMLElement).getBoundingClientRect().top
          )
          .forEach((entry, idx) => {
            const el = entry.target as HTMLElement;
            const meta = elements.get(el);
            if (!meta) return;

            const delay = idx * meta.delayStep;
            const timer = window.setTimeout(() => {
              el.classList.add("is-visible");
            }, delay);

            meta.timers.push(timer);
            observer.unobserve(el);
            elements.delete(el);
          });
      });
    },
    { threshold }
  );

  const record: ObserverRecord = { observer, elements };
  observerRecords.set(key, record);
  return record;
}

export default function FadeIn({
  children,
  threshold = 0.2,
  delayStep = 220,
  group,
}: FadeInProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    element.classList.remove("is-visible");
    element.dataset.fadeGroup = group ?? DEFAULT_GROUP;

    const record = getObserverRecord(threshold);
    const meta: ElementMeta = { delayStep, timers: [] };
    record.elements.set(element, meta);
    record.observer.observe(element);

    return () => {
      meta.timers.forEach((timerId) => window.clearTimeout(timerId));
      record.observer.unobserve(element);
      record.elements.delete(element);
    };
  }, [threshold, delayStep, group]);

  return (
    <div ref={containerRef} className="fade-in">
      {children}
    </div>
  );
}
