import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/management-system/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
