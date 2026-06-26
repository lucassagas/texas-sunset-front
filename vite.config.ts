import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  preview: {
    allowedHosts: ["9957-2804-7f5-f216-deb-9079-b018-a0eb-4a6e.ngrok-free.app"],
  },
  plugins: [tailwindcss(), react()],
});
