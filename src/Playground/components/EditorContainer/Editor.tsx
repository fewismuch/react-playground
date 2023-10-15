import React, { useEffect, useMemo, useRef } from 'react'
import MonacoEditor, { Monaco } from '@monaco-editor/react'
import './userWoker.ts'
import { MonacoEditorConfig } from './config'
import { Theme } from '../../PlaygroundContext.tsx'

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
