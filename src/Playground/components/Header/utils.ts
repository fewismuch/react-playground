import { saveAs } from 'file-saver'

import DownloadSvg from './icons/download.svg?raw'
import GithubSvg from './icons/github.svg?raw'
import MoonSvg from './icons/moon.svg?raw'
import ReactSvg from './icons/react.svg'
import ShareSvg from './icons/share.svg?raw'
import SuccessSvg from './icons/success.svg?raw'
import SunSvg from './icons/sun.svg?raw'
import { IMPORT_MAP_FILE_NAME } from '../../files.ts'
import eslintrc from '../../template/.eslintrc.cjs?raw'
import gitignore from '../../template/.gitignore?raw'
import index from '../../template/index.html?raw'
import pkg from '../../template/package.json?raw'
import readme from '../../template/README.md?raw'
import tsconfig from '../../template/tsconfig.json?raw'
import tsconfigNode from '../../template/tsconfig.node.json?raw'
import config from '../../template/vite.config.js?raw'
import { IFiles } from '../../types'

export const icons = {
  DownloadSvg,
  GithubSvg,
  MoonSvg,
  ReactSvg,
  ShareSvg,
  SunSvg,
  SuccessSvg,
}

export async function downloadFiles(files: IFiles) {
  // @ts-ignore
  const { default: JSZip } = await import('https://esm.sh/jszip@3.10.1')
  const zip = new JSZip()

  // basic structure
  zip.file('index.html', index)
  zip.file('package.json', pkg)
  zip.file('vite.config.js', config)
  zip.file('tsconfig.json', tsconfig)
  zip.file('tsconfig.node.json', tsconfigNode)
  zip.file('README.md', readme)
  zip.file('eslintrc.md', eslintrc)
  zip.file('gitignore.md', gitignore)

  // project src
  const src = zip.folder('src')!

  Object.keys(files).forEach((name) => {
    if (files[name].name !== IMPORT_MAP_FILE_NAME) {
      src.file(name, files[name].value)
    } else {
      zip.file(name, files[name].value)
    }
  })

  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'react-project.zip')
}
