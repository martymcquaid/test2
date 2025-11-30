import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/8edfeb0d-7966-4330-aac5-c9d17dd1a9a4/preview/',
  plugins: [react()],
  server: {
    port: 5138,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5138,
    },
  },
})
