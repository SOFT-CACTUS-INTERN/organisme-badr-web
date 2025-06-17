import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // <--- C’est important pour le déploiement Vercel
  plugins: [
    react(),
    tailwindcss(),
  ],
})
