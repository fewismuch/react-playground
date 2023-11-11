import { strFromU8, strToU8, unzlibSync, zlibSync } from 'fflate'

import { IMPORT_MAP_FILE_NAME, reactTemplateFiles } from './files'
import { ICustomFiles, IImportMap, ITheme } from './types'

import type { IFiles } from './types'

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

export const setPlaygroundTheme = (theme: ITheme) => {
  localStorage.setItem(STORAGE_DARK_THEME, String(theme === 'dark'))
  document
    .querySelectorAll('div[data-id="react-playground"]')
    ?.forEach((item) => item.setAttribute('class', theme))
}

export const getPlaygroundTheme = () => {
  const isDarkTheme = JSON.parse(localStorage.getItem(STORAGE_DARK_THEME) || 'false')
  return isDarkTheme ? 'dark' : 'light'
}

const transformCustomFiles = (files: ICustomFiles) => {
  const newFiles: IFiles = {}
  Object.keys(files).forEach((key) => {
    const tempFile = files[key]
    if (typeof tempFile === 'string') {
      newFiles[key] = {
        name: key,
        language: fileName2Language(key),
        value: tempFile,
      }
    } else {
      newFiles[key] = {
        name: key,
        language: fileName2Language(key),
        value: tempFile.code,
        hidden: tempFile.hidden,
        active: tempFile.active,
      }
    }
  })

  return newFiles
}

// 获取用户自定义的选中文件
export const getCustomActiveFile = (files?: ICustomFiles) => {
  if (!files) return null
  return Object.keys(files).find((key) => {
    const tempFile = files[key]
    if (typeof tempFile !== 'string' && tempFile.active) {
      return key
    }
    return null
  })
}

// 合并用户自定义files和importMap，files需要转换
export const getMergedCustomFiles = (files?: ICustomFiles, importMap?: IImportMap) => {
  if (!files) return null
  if (importMap) {
    return {
      ...reactTemplateFiles,
      ...transformCustomFiles(files),
      [IMPORT_MAP_FILE_NAME]: {
        name: IMPORT_MAP_FILE_NAME,
        language: 'json',
        value: JSON.stringify(importMap, null, 2),
      },
    }
  } else {
    return {
      ...reactTemplateFiles,
      ...transformCustomFiles(files),
    }
  }
}

// 从url hash中获取files
export const getFilesFromUrl = () => {
  let files: IFiles | undefined
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
  if (['js', 'jsx'].includes(suffix)) return 'javascript'
  if (['ts', 'tsx'].includes(suffix)) return 'typescript'
  if (['json'].includes(suffix)) return 'json'
  if (['css'].includes(suffix)) return 'css'
  return 'javascript'
}

export const generateRandomString = (length = 10) => {
  const charactersLength = Math.ceil(length / 2)
  const numbersLength = length - charactersLength
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  let randomString = ''

  for (let i = 0; i < charactersLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
  }

  for (let i = 0; i < numbersLength; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length)
    randomString += numbers.charAt(randomIndex)
  }

  randomString = randomString
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')

  return randomString
}
