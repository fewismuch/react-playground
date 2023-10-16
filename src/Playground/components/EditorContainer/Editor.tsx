import React, { useEffect, useMemo, useRef } from 'react'
import MonacoEditor, { Monaco } from '@monaco-editor/react'
import './userWoker.ts'
import { MonacoEditorConfig } from './config'
import { Theme } from '../../PlaygroundContext'

interface Props {
  file: any
  theme: Theme
  onChange?: () => void
  options?: any
}

export const Editor: React.FC<Props> = ({ file, theme, onChange, options }) => {
  const editorRef = useRef<any>(null)

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // ignore save event
    })
    // setTimeout(() => {
    //   editor.getAction('editor.action.formatDocument').run()
    // }, 300)
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
        className={'editor'}
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
    [file]
  )
}
