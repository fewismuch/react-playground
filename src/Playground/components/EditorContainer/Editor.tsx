import React, { useEffect, useMemo, useRef, useContext } from 'react'
import MonacoEditor, { Monaco } from '@monaco-editor/react'
import './userWoker.ts'
import { MonacoEditorConfig } from './config'
import { Theme, PlaygroundContext } from '../../PlaygroundContext'
import styles from './index.module.less'
import { useEditor } from './useEditor'

interface Props {
  file: any
  theme: Theme
  onChange?: () => void
  options?: any
}

export const Editor: React.FC<Props> = ({ file, theme, onChange, options }) => {
  const editorRef = useRef<any>(null)
  const { doOpenEditor } = useEditor()
  const { files, setSelectedFileName } = useContext(PlaygroundContext)

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // ignore save event
    })

    // 初始化文件model
    Object.entries(files).forEach(([key, item]) => {
      if (!monaco?.editor?.getModel(`file:///${key}`)) {
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
    // setTimeout(() => {
    //   editor.getAction('editor.action.formatDocument').run()
    // }, 300)

    // const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(
    //   getWorker(),
    //   monaco
    // );

    // // editor is the result of monaco.editor.create
    // const {
    //   highlighter,
    //   dispose
    // } = monacoJsxSyntaxHighlight.highlighterBuilder({
    //   editor: editor
    // });
    // // init highlight
    // highlighter();
    // jsxSyntaxHighlight.current.highlighter = highlighter
  }

  function handleEditorValidation(markers: { message: string }[]) {
    markers.forEach(marker => {
      console.log('onValidate:', marker.message)
    })
  }

  useEffect(() => {
    editorRef.current?.focus()
  }, [file.name])

  return useMemo(
    () => (
      <MonacoEditor
        className={styles.editor}
        height='100%'
        theme={`vs-${theme}`}
        path={file.name}
        language={file.language}
        value={file.value}
        onChange={onChange}
        onMount={handleEditorDidMount}
        onValidate={handleEditorValidation}
        options={{
          ...MonacoEditorConfig,
          ...options
        }}
      />
    ),
    [file, theme]
  )
}
