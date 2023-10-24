import { Monaco } from '@monaco-editor/react'
import { getWorker, MonacoJsxSyntaxHighlight } from 'monaco-jsx-syntax-highlight'

export const useEditor = () => {
  // 加载react类型定义文件
  const initExtraLibs = (monaco: Monaco) => {
    const types = import.meta.glob(
      [
        '/node_modules/{react,react-dom}/**/*.{d.ts,json}',
        '/node_modules/@types/{react,react-dom}/**/*.{d.ts,json}'
      ],
      { eager: true, as: 'raw' }
    )

    Object.keys(types).forEach(path => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(types[path], `file://${path}`)
      monaco.languages.typescript.javascriptDefaults.addExtraLib(types[path], `file://${path}`)
    })
  }

  // 点击变量跳转文件
  const doOpenEditor = (editor: any, input: any) => {
    const selection = input.options ? input.options.selection : null
    if (selection) {
      if (typeof selection.endLineNumber === 'number' && typeof selection.endColumn === 'number') {
        editor.setSelection(selection)
        editor.revealRangeInCenter(selection, 1 /* Immediate */)
      } else {
        const pos = {
          lineNumber: selection.startLineNumber,
          column: selection.startColumn
        }
        editor.setPosition(pos)
        editor.revealPositionInCenter(pos, 1 /* Immediate */)
      }
    }
    console.log('触发鼠标+ctrl点击', input.resource, selection)
  }

  // 加载jsx高亮
  const loadJsxSyntaxHighlight = (editor: any, monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      esModuleInterop: true
    })

    const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(getWorker(), monaco)

    return monacoJsxSyntaxHighlight.highlighterBuilder({
      editor
    }) as { highlighter: any; dispose: any }
  }

  // TODO 加载第三方包的类型定义文件
  // ...

  return {
    initExtraLibs,
    doOpenEditor,
    loadJsxSyntaxHighlight
  }
}
