import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host:'0.0.0.0',
    port:5173,
    watch: {
      usePolling: true, 
    },
    proxy: {
      '/register/submit': 'http://webapp:8000',
      '/login': 'http://webapp:8000'
    },
  },
})
