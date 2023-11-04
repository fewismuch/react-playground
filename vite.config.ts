import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
const lifecycle = process.env.npm_lifecycle_event

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    lifecycle === 'report'
      ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
      : null,
    importToCDN({
      modules: [
        {
          name: 'typescript',
          var: 'ts',
          path: 'https://cdn.staticfile.org/typescript/5.2.2/typescript.min.js',
        },
        {
          name: 'jszip',
          var: 'jszip',
          path: 'https://cdn.staticfile.org/jszip/3.10.1/jszip.min.js',
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'docs',
  },
})
