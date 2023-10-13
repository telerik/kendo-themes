import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                includePaths: [ "../../node_modules" ]
            }
        }
    },
    build: {
        rollupOptions: {
            input: {
                default: resolve(__dirname, 'assets/default/index.html'),
                bootstrap: resolve(__dirname, 'assets/bootstrap/index.html'),
                material: resolve(__dirname, 'assets/material/index.html'),
                fluent: resolve(__dirname, 'assets/fluent/index.html'),
                classic: resolve(__dirname, 'assets/classic/index.html'),
                nouvelle: resolve(__dirname, 'assets/nouvelle/index.html'),
            }
        },
        outDir: 'dist/'
    }
});
