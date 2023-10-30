import MonacoEditor, { Monaco } from '@monaco-editor/react'
import { useRef } from 'react'

export const Demo2 = () => {
  const editorRef = useRef<any>(null)

  const editorOptions = {}

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // ignore save event
    })

    // 可匹配到.d.ts文件，但是没内容
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `declare module 'ahooks' {
          type useMount = any
      }`,
      'dir/ahooks.d.ts'
    )
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
      import type { IEditorContainer } from 'types'
      import AB,{ab} from 'tianyu'
      import _ from 'lodash'
      
      const a:number = 1`}
      onMount={handleEditorDidMount}
      onValidate={handleEditorValidation}
      options={editorOptions}
    />
  )
}
