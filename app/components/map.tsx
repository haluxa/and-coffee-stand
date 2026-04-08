/// <reference types="google.maps" />
"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  /** 高さ(px)。未指定なら 400 */
  height?: number;
};

declare global {
  interface Window {
    __initGoogleMaps?: () => void;
  }
}

let googleMapsPromise: Promise<void> | null = null;

function loadGoogleMaps(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps can only load in the browser"));
  }

  if (window.google?.maps) {
    return Promise.resolve();
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(
      "gmaps",
    ) as HTMLScriptElement | null;

    const handleResolve = () => resolve();
    const handleReject = () => {
      googleMapsPromise = null;
      reject(new Error("Failed to load Google Maps JavaScript API"));
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleResolve, { once: true });
      existingScript.addEventListener("error", handleReject, { once: true });
      return;
    }

    window.__initGoogleMaps = handleResolve;

    const script = document.createElement("script");
    script.id = "gmaps";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=__initGoogleMaps`;
    script.async = true;
    script.defer = true;
    script.onerror = handleReject;
    document.head.appendChild(script);
  }).finally(() => {
    delete window.__initGoogleMaps;
  });

  return googleMapsPromise;
}

export default function Map({ height = 400 }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  // 白黒スタイル
  const grayscaleStyle: google.maps.MapTypeStyle[] = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ];
  const center = { lat: 33.8727700236595, lng: 130.85770975415534 };

  useEffect(() => {
    let cancelled = false;

    const initMap = async () => {
      await loadGoogleMaps();

      if (cancelled || !mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
        styles: grayscaleStyle,
        disableDefaultUI: true,
      });
      new google.maps.Marker({
        position: center,
        map,
        title: "and coffee stand",
      });
    };

    void initMap();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mapRef} className="map" style={{ height }} />;
}
