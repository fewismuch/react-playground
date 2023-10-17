/// <reference types="vite/client" />
declare function importScripts(...urls: string[]): void

declare const Babel: {
  transform: (code: string, options?: any) => { code: string; map: any }
}
