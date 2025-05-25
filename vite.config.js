import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    host: true, // ← これを追加（0.0.0.0と同義）
    port: 5173, // 任意（既定のままでOK）
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
