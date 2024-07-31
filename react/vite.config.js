import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/home/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-router-dom'
      ]
    }
  }
});
