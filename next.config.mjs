import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 避免用户主目录存在 package-lock.json 时，Next 误判 monorepo 根目录（影响 Cloudflare 追踪）
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
