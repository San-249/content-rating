import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'C:/Users/marut/OneDrive/Desktop/Webpages/rating page/content_rating/index.html', // Explicitly define the entry point
    },
  },
})
