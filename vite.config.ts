import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const lifecycle = process.env.npm_lifecycle_event
const isDevelopment = process.env.NODE_ENV === 'development'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
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
            // {
            //   name: 'typescript',
            //   var: 'ts',
            //   path: 'https://cdn.staticfile.org/typescript/5.2.2/typescript.min.js',
            // },
            // {
            //   name: 'jszip',
            //   var: 'jszip',
            //   path: 'https://cdn.staticfile.org/jszip/3.10.1/jszip.min.js',
            // },
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
  optimizeDeps: {
    exclude: isDevelopment ? undefined : ['react', 'react-dom'],
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
