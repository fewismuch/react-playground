import MonacoEditor, { Monaco } from '@monaco-editor/react'
import React, { useEffect, useRef, useContext, useState } from 'react'

import { MonacoEditorConfig } from './monacoConfig'
import { useEditor } from './useEditor'
import { PlaygroundContext } from '../../../PlaygroundContext'
import { fileName2Language } from '../../../utils'

import type { IEditorOptions, IFile } from '../../../types'

import './jsx-highlight.less'
import './useEditorWoker'

interface Props {
  file: IFile
  onChange?: (code: string | undefined) => void
  options?: IEditorOptions
}

export const Editor: React.FC<Props> = (props) => {
  const { file, onChange, options } = props
  const { theme, files, setSelectedFileName } = useContext(PlaygroundContext)
  const editorRef = useRef<any>(null)
  const { doOpenEditor, loadJsxSyntaxHighlight, autoLoadExtraLib } = useEditor()
  const [editorOptions, setEditorOptions] = useState({
    ...MonacoEditorConfig,
    ...{
      ...options,
      theme: undefined,
    },
  })

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // ignore save event
      console.log(11)
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
      setSelectedFileName(path.replace('/', ''))
      if (!path.startsWith('/node_modules/')) {
        doOpenEditor(editor, input)
      }
    }

    // 加载类型定义文件
    autoLoadExtraLib(editor, monaco, file.value)

    // 加载jsx高亮
    loadJsxSyntaxHighlight(editor, monaco)
  }

  useEffect(() => {
    editorRef.current?.focus()
  }, [file.name])

  useEffect(() => {
    setEditorOptions({
      ...editorOptions,
      readOnly: file.readOnly,
    })
  }, [file.readOnly])

  useEffect(() => {}, [])

  return (
    <MonacoEditor
      className='react-playground-editor'
      height='100%'
      theme={`vs-${theme}`}
      path={file.name}
      language={file.language}
      value={file.value}
      onChange={onChange}
      onMount={handleEditorDidMount}
      options={editorOptions}
    />
  )
}
