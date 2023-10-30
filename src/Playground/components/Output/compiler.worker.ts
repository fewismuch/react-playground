import { transform } from '@babel/standalone'

import { ENTRY_FILE_NAME } from '../../files'
import { IFiles, IFile } from '../../types'

const getModuleFile = (files: IFiles, moduleName: string) => {
  let _moduleName = moduleName.split('./').pop() || ''
  if (!_moduleName.includes('.')) {
    const realModuleName = Object.keys(files).find((key) => key.split('.').includes(_moduleName))
    if (realModuleName) _moduleName = realModuleName
  }
  return files[_moduleName]
}

const transformJson = (file: IFile) => {
  const js = `export default ${file.value}`
  return URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
}

const transformCss = (file: IFile) => {
  const randomId = new Date().getTime()
  const js = `
                  (() => {
                    let stylesheet = document.getElementById('style_${randomId}_${file.name}');
                    if (!stylesheet) {
                      stylesheet = document.createElement('style')
                      stylesheet.setAttribute('id', 'style_${randomId}_${file.name}')
                      document.head.appendChild(stylesheet)
                    }
                    const styles = document.createTextNode(\`${file.value}\`)
                    stylesheet.innerHTML = ''
                    stylesheet.appendChild(styles)
                  })()
                  `
  return URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
}

const babelTransform = (filename: string, code: string, files: IFiles) => {
  let _code = code
  // 如果没有引入React，开头添加React引用
  const regexReact = /import\s+React/g
  if (filename.endsWith('.jsx') && !regexReact.test(code)) {
    _code = `import React from 'react';\n${code}`
  }
  /*  const regexExportDefault = /export\s+default/g
  if (filename.endsWith('.js') && !regexExportDefault.test(files[filename].value)) {
    _code = `${code}\nexport default {}`
  } */
  return transform(_code, {
    presets: ['react'],
    filename,
    plugins: [customResolver(files)],
  }).code!
}

const customResolver = (files: IFiles) => {
  return {
    visitor: {
      ImportDeclaration(path: any) {
        const moduleName: string = path.node.source.value
        if (moduleName.startsWith('.')) {
          const module = getModuleFile(files, moduleName)
          if (!module) return
          if (module.name.endsWith('.css')) {
            path.node.source.value = transformCss(module)
          } else if (module.name.endsWith('.json')) {
            path.node.source.value = transformJson(module)
          } else {
            path.node.source.value = URL.createObjectURL(
              new Blob([babelTransform(module.name, module.value, files)], {
                type: 'application/javascript',
              })
            )
          }
        } else {
          // 可以根据导入的内容去生成ts声明文件
          path.node.specifiers.forEach(() => {
            // console.log(item.imported?.name)
          })
        }
      },
    },
  }
}

const compile = (files: IFiles) => {
  const main = files[ENTRY_FILE_NAME]
  const compileCode = babelTransform(ENTRY_FILE_NAME, main.value, files)
  return { compileCode }
}

self.addEventListener('message', async ({ data }) => {
  if (typeof data === 'string') {
    self.postMessage({
      type: 'UPDATE_FILE',
      data: transform(data, {
        presets: ['react'],
        retainLines: true,
      }).code,
    })
    return
  }
  try {
    self.postMessage({
      type: 'UPDATE_FILES',
      data: compile(data),
    })
  } catch (e) {
    self.postMessage({ type: 'ERROR', error: e })
  }
})
