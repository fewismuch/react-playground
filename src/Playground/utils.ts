import { zlibSync, unzlibSync, strToU8, strFromU8 } from 'fflate'
import { saveAs } from 'file-saver'

import { IMPORT_MAP_FILE_NAME, reactTemplateFiles } from './files.ts'
import index from './template/index.html?raw'
import pkg from './template/package.json?raw'
import readme from './template/README.md?raw'
import config from './template/vite.config.js?raw'
import { ImportMap, Theme } from './types'

import type { Files } from './types'

export async function downloadFiles(files: Files) {
  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()

  // basic structure
  zip.file('index.html', index)
  zip.file('package.json', pkg)
  zip.file('vite.config.js', config)
  zip.file('README.md', readme)

  // project src
  const src = zip.folder('src')!

  Object.keys(files).forEach(name => {
    if (files[name].name !== IMPORT_MAP_FILE_NAME) {
      src.file(name, files[name].value)
    } else {
      zip.file(name, files[name].value)
    }
  })

  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'react-project.zip')
}

export function debounce(fn: (...args: any[]) => void, n = 100) {
  let handle: any
  return (...args: any[]) => {
    if (handle) clearTimeout(handle)
    handle = setTimeout(() => {
      fn(...args)
    }, n)
  }
}

// 编码
export function utoa(data: string): string {
  const buffer = strToU8(data)
  const zipped = zlibSync(buffer, { level: 9 })
  const binary = strFromU8(zipped, true)
  return btoa(binary)
}

// 解码
export function atou(base64: string): string {
  const binary = atob(base64)

  // zlib header (x78), level 9 (xDA)
  if (binary.startsWith('\x78\xDA')) {
    const buffer = strToU8(binary, true)
    const unzipped = unzlibSync(buffer)
    return strFromU8(unzipped)
  }

  // old unicode hacks for backward compatibility
  // https://base64.guru/developers/javascript/examples/unicode-strings
  return decodeURIComponent(escape(binary))
}

const STORAGE_DARK_THEME = 'react-playground-prefer-dark'

export const setPlaygroundTheme = (theme: Theme) => {
  localStorage.setItem(STORAGE_DARK_THEME, String(theme === 'dark'))
  document.querySelector('#react-playground')?.setAttribute('class', theme)
}

export const getPlaygroundTheme = () => {
  const isDarkTheme = JSON.parse(localStorage.getItem(STORAGE_DARK_THEME) || 'false')
  return isDarkTheme ? 'dark' : 'light'
}

// 合并用户自定义files和importMap
export const getMergedCustomFiles = (files?: Files, importMap?: ImportMap) => {
  if (!files) return null
  if (importMap) {
    return {
      ...reactTemplateFiles,
      ...files,
      [IMPORT_MAP_FILE_NAME]: {
        name: IMPORT_MAP_FILE_NAME,
        language: 'json',
        value: JSON.stringify(importMap, null, 2)
      }
    }
  } else {
    return {
      ...reactTemplateFiles,
      ...files
    }
  }
}

// 从url hash中获取files
export const getFilesFromUrl = () => {
  let files: Files | undefined
  try {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) files = JSON.parse(atou(hash?.split('#')[1]))
    }
  } catch (error) {
    console.error(error)
  }
  return files
}

// 根据文件名后缀匹配文件类型
export const fileName2Language = (name: string) => {
  const suffix = name.split('.').pop() || ''
  if (['js', 'jsx', 'json'].includes(suffix)) return 'javascript'
  if (['ts', 'tsx'].includes(suffix)) return 'typescript'
  if (['css'].includes(suffix)) return 'css'
  return 'javascript'
}
