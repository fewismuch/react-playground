import importMap from './template/import-map.json?raw'
import AppCss from './template/src/App.css?raw'
import App from './template/src/App.jsx?raw'
import main from './template/src/main.jsx?raw'
import { atou } from './utils'

import type { Files } from './types'

// 读取hash值 设置为files
let files
try {
  const hash = window.location.hash
  if (hash) files = JSON.parse(atou(hash?.split('#')[1]))
} catch (error) {
  console.error(error)
}

export const mainFileName = 'App.jsx'
export const importMapFileName = 'import-map.json'

export const initFiles: Files = files || {
  'main.jsx': {
    name: 'main.jsx',
    language: 'javascript',
    value: main
  },
  [mainFileName]: {
    name: mainFileName,
    language: 'javascript',
    value: App
  },
  'App.css': {
    name: 'App.css',
    language: 'css',
    value: AppCss
  },
  [importMapFileName]: {
    name: importMapFileName,
    language: 'json',
    value: importMap
  }
}

export const reactTemplateFiles = {
  'main.jsx': {
    name: 'main.jsx',
    language: 'javascript',
    value: main
  },
  [importMapFileName]: {
    name: importMapFileName,
    language: 'json',
    value: importMap
  }
}
