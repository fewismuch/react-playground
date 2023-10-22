import { getWorker, MonacoJsxSyntaxHighlight } from 'monaco-jsx-syntax-highlight'

export const useEditor = () => {
  const initExtraLibs = (monaco: any) => {
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

    // 可匹配到.d.ts文件，但是没内容
    // const uri = monaco.Uri.file("dir/lodash.d.ts");
    // monaco.languages.typescript.typescriptDefaults.addExtraLib(`declare module 'lodash' {}`,uri);
  }

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

  const loadJsxSyntaxHighlight = (editor: any, monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      esModuleInterop: true
    })

    const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(getWorker(), monaco)

    // editor is the result of monaco.editor.create
    return monacoJsxSyntaxHighlight.highlighterBuilder({
      editor
    }) as { highlighter: any; dispose: any }
  }

  return {
    initExtraLibs,
    doOpenEditor,
    loadJsxSyntaxHighlight
  }
}
