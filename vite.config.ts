import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 👈 Required for Render
    port: 4173, // optional: use Render's provided port
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    // ✅ Allow your Render domain here
    allowedHosts: ["react-portfolio-lbtd.onrender.com"],
  },
});
