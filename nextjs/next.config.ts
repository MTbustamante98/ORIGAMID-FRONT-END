import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  reactStrictMode: false,

  webpack: (config, { dev, isServer }) => {
    // Se estiver em modo de desenvolvimento, ignora pastas de cache e arquivos temporários
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Checa mudanças a cada 1 segundo em vez de usar o watcher nativo do SO
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
      };
    }
    return config;
  },
};

export default nextConfig;
