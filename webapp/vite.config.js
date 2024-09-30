import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/register/submit': 'http://localhost:8000',
      '/login': 'http://localhost:8000'
    },
  },
})