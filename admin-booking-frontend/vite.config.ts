import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // <-- Phải import đúng plugin
import react from '@vitejs/plugin-react' // <-- Nếu là dự án React

export default defineConfig({
  plugins: [
    react(), // <-- Nếu bạn dùng @vitejs/plugin-react
    tailwindcss(), // <-- Phải gọi plugin này
  ],
})