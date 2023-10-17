import { atou } from './utils'
import main from './template/src/main.jsx?raw'
import App from './template/src/App.jsx?raw'
import AppCss from './template/src/App.css?raw'
import importMap from './template/import-map.json?raw'
import { Files } from './types'

// 读取hash值 设置为files
let files
try {
  const hash = window.location.hash
  if (hash) files = JSON.parse(atou(hash?.split('#')[1]))
} catch (error) {
  console.error(error)
}

export const initFiles: Files = files || {
  'main.jsx': {
    name: 'main.jsx',
    language: 'javascript',
    value: main
  },
  'App.jsx': {
    name: 'App.jsx',
    language: 'javascript',
    value: App
  },
  'App.css': {
    name: 'App.css',
    language: 'css',
    value: AppCss
  },
  'import-map.json': {
    name: 'import-map.json',
    language: 'json',
    value: importMap
  }
}
