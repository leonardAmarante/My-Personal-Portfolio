import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // or you can specify your local IP address, e.g., '192.168.x.x'
    port: 3000,       // Default Vite port, change if needed
  },
 
      base: './',
  build: {
    outDir: 'dist'
  }
 
})
