import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/OnlineBussness/", // GitHub repo ka exact name yahan hona chahiye
});


