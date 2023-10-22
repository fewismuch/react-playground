import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  define: {
    babelStandaloneVersion: JSON.stringify(packageJson.dependencies['@babel/standalone'])
  }
})
