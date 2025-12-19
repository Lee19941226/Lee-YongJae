import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My-portfolio/",
  build: {
    outDir: "docs",
    emptyOutDir: true, // 매우 중요! 이전 파일 완전히 삭제
  },
});
