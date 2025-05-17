import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 plugins: [react()],
 server: {
  cors: true,
  proxy: {
   // Proxy API requests to Laravel backend
   "/api": {
    target: "http://localhost:8000",
    changeOrigin: true,
    secure: false,
   },
  },
 },
});
