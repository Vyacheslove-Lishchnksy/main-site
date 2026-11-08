import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Відносні шляхи, щоб збірка працювала і на GitHub Pages (підкаталог),
  // і на власному домені без зміни конфігурації.
  base: '/main-site/',
})
