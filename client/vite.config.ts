import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
      //   '/api': {
      //     target: 'http://localhost:3001',
      //     changeOrigin: true,
      //     secure: false,
      //   },
      //   '/auth': {
      //     target: 'http://localhost:3001',
      //     changeOrigin: true,
      //     secure: false
      //   },
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/tests/setup.js",
  },
});
