import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const lifecycle = process.env.npm_lifecycle_event

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    'process.env': {},
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin({ topExecutionPriority: false }),
    lifecycle === 'report'
      ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
      : null,
    lifecycle !== 'docs'
      ? null
      : importToCDN({
          modules: [
            {
              name: 'react',
              var: 'React',
              path: 'https://cdn.staticfile.org/react/18.2.0/umd/react.production.min.js',
            },
            {
              name: 'react-dom',
              var: 'ReactDOM',
              path: 'https://cdn.staticfile.org/react-dom/18.2.0/umd/react-dom.production.min.js',
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
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom'],
  },
  build: {
    minify: true,
    outDir: lifecycle === 'docs' ? 'docs' : 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    lib:
      lifecycle === 'docs'
        ? undefined
        : {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/Playground/index.tsx'),
            formats: ['es'],
            fileName: 'index',
          },
  },
})
