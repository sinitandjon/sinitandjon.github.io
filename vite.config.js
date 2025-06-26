// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ For user/organization repo named exactly "username.github.io"
  plugins: [react()]
})
