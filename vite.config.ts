import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { kendoTestServer } from "./scripts/vite-plugin-kendo-tests";

export default defineConfig({
    appType: "custom",
    plugins: [
        react(),
        kendoTestServer(),
    ],
    server: {
        port: 3000,
    },
});
