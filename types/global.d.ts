declare global {
  interface Window {
    // Google Maps の callback を受ける（存在しない可能性があるので optional）
    initMap?: () => void;
  }
}

declare module "*.css" {
  const css: string;
  export default css;
}

// ファイルがモジュールとして扱われないよう export を入れておく
export {};
