import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages when the site is at https://<user>.github.io/<repo>/
  // Use your actual repo name; use '' if this is your user site (e.g. username.github.io)
  base: '/daniel-portfolio/',
})
