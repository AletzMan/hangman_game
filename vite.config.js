import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://AletzMan.github.io/hangman_game",
  plugins: [react()],
})
