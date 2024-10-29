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
      '/api': 'http://webapp:8000',
      '/api/register': 'http://webapp:8000',
      '/api/login': 'http://webapp:8000'  
    },
  },
})
