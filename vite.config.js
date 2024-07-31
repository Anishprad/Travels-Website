import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6767,
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //     // assets: path.resolve(__dirname, "src/assets"),
  //     // helpers: path.resolve(__dirname, "src/helpers"),
  //     // utils: path.resolve(__dirname, "src/utils"),
  //     views: path.resolve(__dirname, "src/views"),
  //   },
  // },
  plugins: [react()],
});
