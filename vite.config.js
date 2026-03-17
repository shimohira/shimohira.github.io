import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  root: 'app',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'app/index.html'),
        'subnet-calculate/index': resolve(
          __dirname,
          'app/subnet-calculate/index.html',
        ),
      },
    },
  },
})
