import importMap from './template/import-map.json?raw'
import AppCss from './template/src/App.css?raw'
import App from './template/src/App.tsx?raw'
import main from './template/src/main.tsx?raw'
import { getFilesFromUrl } from './utils.ts'

import type { IFiles } from './types'

// app文件名
export const MAIN_FILE_NAME = 'App.tsx'
// esm模块映射文件名
export const IMPORT_MAP_FILE_NAME = 'import-map.json'
// app入口文件名
export const ENTRY_FILE_NAME = 'main.tsx'

export const initFiles: IFiles = getFilesFromUrl() || {
  [ENTRY_FILE_NAME]: {
    name: ENTRY_FILE_NAME,
    language: 'typescript',
    value: main,
  },
  [MAIN_FILE_NAME]: {
    name: MAIN_FILE_NAME,
    language: 'typescript',
    value: App,
  },
  'App.css': {
    name: 'App.css',
    language: 'css',
    value: AppCss,
  },
  [IMPORT_MAP_FILE_NAME]: {
    name: IMPORT_MAP_FILE_NAME,
    language: 'json',
    value: importMap,
  },
}

export const reactTemplateFiles = {
  [ENTRY_FILE_NAME]: {
    name: ENTRY_FILE_NAME,
    language: 'typescript',
    value: main,
  },
  [IMPORT_MAP_FILE_NAME]: {
    name: IMPORT_MAP_FILE_NAME,
    language: 'json',
    value: importMap,
  },
}
