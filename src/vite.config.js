import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Para habilitar JSX en archivos .js
    include: /src\/.*\.js$/, // Incluye todos los archivos .js dentro de la carpeta src
  },
});
