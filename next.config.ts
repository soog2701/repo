import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Turbopack 관련 옵션을 여기에 추가할 수 있습니다.
    // 예: hotReload: true
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      // 필요시 외부 이미지 패턴 추가
    ],
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://soog2701.github.io/repo"
      : "",
  // Tailwind, PostCSS 등은 별도 설정 파일에서 관리됨

};

export default nextConfig;
