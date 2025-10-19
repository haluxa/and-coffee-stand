declare global {
  interface Window {
    // Google Maps の callback を受ける（存在しない可能性があるので optional）
    initMap?: () => void;
  }
}

// ファイルがモジュールとして扱われないよう export を入れておく
export {};
