import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ParkourServer/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        404: '404.html'
      }
    }
  }
})
