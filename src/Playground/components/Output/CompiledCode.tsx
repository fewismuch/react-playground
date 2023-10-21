import React from 'react'

import { Theme } from '../../types.ts'
import { Editor } from '../EditorContainer/Editor'

interface Props {
  hidden: boolean
  theme: Theme
  value: string
}

export const CompiledCode: React.FC<Props> = props => {
  const { hidden, theme, value } = props
  return (
    <div style={{ height: '100%', display: hidden ? 'none' : '' }}>
      <Editor theme={theme} file={{ value, language: 'javascript' }} options={{ readOnly: true }} />
    </div>
  )
}
