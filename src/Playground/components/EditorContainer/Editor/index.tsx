import MonacoEditor, { Monaco } from '@monaco-editor/react'
import React, { useEffect, useRef, useContext, useCallback, useState } from 'react'

import { MonacoEditorConfig } from './monacoConfig'
import { useEditor } from './useEditor'
import { PlaygroundContext } from '../../../PlaygroundContext'
import { debounce } from '../../../utils.ts'

import type { IEditorOptions, IFile } from '../../../types.ts'

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
  const { doOpenEditor, loadJsxSyntaxHighlight, initExtraLibs } = useEditor()
  const jsxSyntaxHighlight = useRef<any>({ highlighter: null })
  const [editorOptions, setEditorOptions] = useState({
    ...MonacoEditorConfig,
    ...{
      ...options,
      theme: undefined,
    },
  })

  const handleEditorDidMount = useCallback((editor: any, monaco: Monaco) => {
    editorRef.current = editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // ignore save event
    })

    // setTimeout(() => {
    //   editor.getAction('editor.action.formatDocument').run()
    // }, 300)

    // 初始化文件model
    Object.entries(files).forEach(([key, item]) => {
      if (!monaco?.editor?.getModel(monaco.Uri.parse(`file:///${key}`))) {
        monaco?.editor?.createModel(
          files[key].value,
          item.language,
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

    // 加载react类型定义文件
    initExtraLibs(monaco)

    // 加载jsx高亮
    jsxSyntaxHighlight.current = loadJsxSyntaxHighlight(editor, monaco)
    jsxSyntaxHighlight.current?.highlighter()
    return jsxSyntaxHighlight.current?.dispose
  }, [])

  const handleEditorValidation = (markers: { message: string }[]) => {
    markers.forEach((marker) => {
      console.log(marker.message)
    })
  }

  const highlight = debounce(() => {
    jsxSyntaxHighlight?.current?.highlighter?.()
  }, 200)

  useEffect(() => {
    editorRef.current?.focus()
    highlight()
  }, [file.name])

  useEffect(() => {
    highlight()
  }, [file.value])

  useEffect(() => {
    setEditorOptions({
      ...editorOptions,
      readOnly: file.readOnly,
    })
  }, [file.readOnly])

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
      onValidate={handleEditorValidation}
      options={editorOptions}
    />
  )
}
