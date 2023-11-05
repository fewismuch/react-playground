import { transform } from '@babel/standalone'

import { getModuleFile, css2Js, json2Js, beforeTransformCodeHandler } from './utils.ts'
import { ENTRY_FILE_NAME } from '../../files.ts'
import { IFiles } from '../../types.ts'

const babelTransform = (filename: string, code: string, files: IFiles) => {
  const _code = beforeTransformCodeHandler(filename, code)
  let result = ''
  try {
    result = transform(_code, {
      presets: ['react', 'typescript'],
      filename,
      plugins: [customResolver(files)],
    }).code!
  } catch (e) {
    self.postMessage({ type: 'ERROR', error: e })
  }
  return result
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
            path.node.source.value = css2Js(module)
          } else if (module.name.endsWith('.json')) {
            path.node.source.value = json2Js(module)
          } else {
            path.node.source.value = URL.createObjectURL(
              new Blob([babelTransform(module.name, module.value, files)], {
                type: 'application/javascript',
              })
            )
          }
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
  try {
    if (typeof data === 'string') {
      self.postMessage({
        type: 'UPDATE_FILE',
        data: transform(data, {
          presets: ['react', 'typescript'],
          retainLines: true,
          filename: 'tempFileName',
        }).code,
      })
      return
    }

    self.postMessage({
      type: 'UPDATE_FILES',
      data: compile(data),
    })
  } catch (e) {
    self.postMessage({ type: 'ERROR', error: e })
  }
})
