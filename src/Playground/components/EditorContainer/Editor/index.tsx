import MonacoEditor, { Monaco } from '@monaco-editor/react'
import React, { useEffect, useRef, useContext } from 'react'

import { MonacoEditorConfig } from './monacoConfig'
import { useEditor } from './useEditor'
import { useTypesProgress } from './useProgress'

import { Loading } from '@/Playground/components/Loading'
import { PlaygroundContext } from '@/Playground/PlaygroundContext'
import type { IEditorOptions, IFile } from '@/Playground/types'
import { fileName2Language } from '@/Playground/utils'
import './jsx-highlight.less'
import './useEditorWoker'

interface Props {
  file: IFile
  onChange?: (code: string | undefined) => void
  options?: IEditorOptions
  onSave?: (code: string | undefined) => void
}

export const Editor: React.FC<Props> = (props) => {
  const { file, onChange, onSave, options } = props
  const { theme, files, setSelectedFileName } = useContext(PlaygroundContext)
  const editorRef = useRef<any>(null)
  const { doOpenEditor, loadJsxSyntaxHighlight, autoLoadExtraLib } = useEditor()
  const jsxSyntaxHighlightRef = useRef<any>({ highlighter: null, dispose: null })
  const { total, finished, onWatch } = useTypesProgress()

  const handleEditorDidMount = async (editor: any, monaco: Monaco) => {
    editorRef.current = editor
    // ignore save event
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      onSave?.(editor.getValue())
      editor.getAction('editor.action.formatDocument').run()
    })

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    })

    // 初始化自定义文件model
    Object.entries(files).forEach(([key]) => {
      if (!monaco?.editor?.getModel(monaco.Uri.parse(`file:///${key}`))) {
        monaco?.editor?.createModel(
          files[key].value,
          fileName2Language(key),
          monaco.Uri.parse(`file:///${key}`)
        )
      }
    })

    // 覆盖原点击变量跳转方法
    editor._codeEditorService.doOpenEditor = function (editor: any, input: any) {
      const path = input.resource.path
      if (!path.startsWith('/node_modules/')) {
        setSelectedFileName(path.replace('/', ''))
        doOpenEditor(editor, input)
      }
    }
    // 加载jsx高亮
    jsxSyntaxHighlightRef.current = loadJsxSyntaxHighlight(editor, monaco)

    // 加载类型定义文件
    autoLoadExtraLib(editor, monaco, file.value, onWatch)
  }

  useEffect(() => {
    editorRef.current?.focus()
    jsxSyntaxHighlightRef?.current?.highlighter?.()
  }, [file.name])

  return (
    <>
      <MonacoEditor
        className='react-playground-editor'
        height='100%'
        theme={`vs-${theme}`}
        path={file.name}
        language={file.language}
        value={file.value}
        onChange={onChange}
        onMount={handleEditorDidMount}
        options={{
          ...MonacoEditorConfig,
          ...{
            ...options,
            theme: undefined,
          },
        }}
      />
      <div className='react-playground-editor-types-loading'>
        {total > 0 ? <Loading finished={finished}></Loading> : null}
      </div>
    </>
  )
}
