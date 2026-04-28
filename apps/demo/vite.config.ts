import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@legend/store-core": path.resolve(__dirname, "../../packages/core/src"),
            "@legend/store-react": path.resolve(__dirname, "../../packages/react/src"),
            "@legend/store-devtools": path.resolve(__dirname, "../../packages/devtools/src"),
        },
    },
    server: {
        port: 9000,
    }
});