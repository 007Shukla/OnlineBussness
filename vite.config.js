import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/OnlineBussness/", // Repo name ke hisaab se yeh set karna zaroori hai!
});
