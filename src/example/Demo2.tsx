import MonacoEditor, { Monaco } from '@monaco-editor/react'
import React, { useRef } from 'react'

export const Demo2 = () => {
  const editorRef = useRef<any>(null)

  const editorOptions = {}

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // ignore save event
    })
    monaco.languages.typescript.typescriptDefaults.addExtraLib('', `file:///ahooks`)
  }

  const handleEditorValidation = (markers: { message: string }[]) => {
    markers.forEach((marker) => {
      console.log(marker.message)
    })
  }

  return (
    <MonacoEditor
      className='react-playground-editor'
      height='400px'
      width='600px'
      language='typescript'
      value={`import {useMount} from 'ahooks' 
      const a:number = 1`}
      onMount={handleEditorDidMount}
      onValidate={handleEditorValidation}
      options={editorOptions}
    />
  )
}
