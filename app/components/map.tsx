/// <reference types="google.maps" />
"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  /** 高さ(px)。未指定なら 400 */
  height?: number;
};

export default function Map({ height = 400 }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  // 白黒スタイル
  const grayscaleStyle: google.maps.MapTypeStyle[] = [
    // 背景（地面全体）
    {
      elementType: "geometry",
      stylers: [
        { color: "#e7e7e7ff" }, // ← ベージュ系（コーヒーショップに合う）
        { saturation: 100 },
        { lightness: 100 },
      ],
    },

    // ラベル類
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      elementType: "labels.text.fill",
      stylers: [
        { color: "#d9d9d9ff" },
        { saturation: 100 },
        { lightness: 100 },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        { color: "#383838ff" },
        { saturation: -100 },
        { lightness: -100 },
      ], // 文字の縁を黒に
    },

    // ポイント（お店など）を非表示
    { featureType: "poi", stylers: [{ visibility: "off" }] },

    // 道路の色（グレー）
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { color: "#181818ff" },
        { saturation: -100 },
        { lightness: -100 },
      ], // ← 道路の灰色
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#666666" }], // 幹線道路（少し濃いグレー）
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#999999" }], // 高速道路（少し明るいグレー）
    },

    // 水の色
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#1a1a1a" }], // 黒背景に馴染むよう暗め
    },
  ];
  const center = { lat: 33.8727700236595, lng: 130.85770975415534 };

  useEffect(() => {
    // 明示的に型を付けた上でコールバックを設定
    (window as Window & { initMap?: () => void }).initMap = () => {
      if (!mapRef.current) return;
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 18,
        styles: grayscaleStyle,
        disableDefaultUI: true,
      });
      new google.maps.Marker({
        position: center,
        map,
        title: "and coffee stand",
      });
    };

    const script = document.createElement("script");
    script.id = "gmaps";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // 後片付け：initMap を削除して、スクリプト要素も消す
      delete (window as Window & { initMap?: () => void }).initMap;
      const el = document.getElementById("gmaps");
      if (el) el.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mapRef} className="map" style={{ height }} />;
}
