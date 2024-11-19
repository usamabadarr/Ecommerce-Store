import { defineConfig } from 'vitest/config';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  proxy: {
    // We have to set up our Vite client-side development server to proxy API requests to our server-side Node server at port 3001 in order to hit our GraphQL application.
    '/graphql': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
    '/auth': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false
    },
  },
},
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.js',
  },
});
