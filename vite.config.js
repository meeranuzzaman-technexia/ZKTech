import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/ZKTech/',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    // allow the sandbox preview proxy host (and any other host) to reach the dev server
    allowedHosts: true,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: true,
  },
})
