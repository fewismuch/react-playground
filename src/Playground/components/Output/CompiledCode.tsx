import React from 'react'
import { Editor } from '../EditorContainer/Editor'
import { Theme } from '../../PlaygroundContext'

interface Props {
  hidden: boolean
  theme: Theme
  value: string
}

export const CompiledCode: React.FC<Props> = props => {
  const { hidden, theme, value } = props
  return (
    <div style={{ height: '100%', display: hidden ? 'none' : '' }}>
      <Editor
        theme={theme}
        file={{ value: value, language: 'javascript' }}
        options={{ readOnly: true }}
      />
    </div>
  )
}
