import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                loadPaths: [ "../../node_modules" ]
            }
        }
    },
    build: {
        rollupOptions: {
            input: {
                default: resolve(import.meta.dirname, 'assets/default/index.html'),
                bootstrap: resolve(import.meta.dirname, 'assets/bootstrap/index.html'),
                material: resolve(import.meta.dirname, 'assets/material/index.html'),
                fluent: resolve(import.meta.dirname, 'assets/fluent/index.html'),
                classic: resolve(import.meta.dirname, 'assets/classic/index.html')
            }
        },
        outDir: 'dist/'
    }
});
