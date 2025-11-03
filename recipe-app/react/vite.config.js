import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // where Electron will read files
    emptyOutDir: true,
  },
  base: './', // set base for assets
  root: resolve(__dirname), // your React source files
});
