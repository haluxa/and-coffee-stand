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
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#dcdcdc" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }],
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
