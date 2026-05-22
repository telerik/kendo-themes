import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { kendoDevServer } from "./scripts/vite-plugin-dev-server";

export default defineConfig({
    appType: "custom",
    plugins: [
        react(),
        kendoDevServer(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                loadPaths: ["node_modules"],
            },
        },
    },
    server: {
        port: 3000,
    },
});
