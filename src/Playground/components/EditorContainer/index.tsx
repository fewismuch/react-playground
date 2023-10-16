import React, { useContext, useState } from 'react'
import { Tabs } from './Tabs'
import { PlaygroundContext } from '../../PlaygroundContext'
import { Editor } from './Editor'
import { debounce } from '../../utils'
import type {EditorContainerProps} from '../../types'

export const EditorContainer: React.FC<EditorContainerProps> = props => {
  const { showFileSelector, fileSelectorReadOnly, options = {} } = props
  const { theme, files, setFiles } = useContext(PlaygroundContext)
  const [fileName, setFileName] = useState('App.jsx')
  const file = files[fileName] || {}

  const handleEditorChange = debounce((value: string) => {
    files[file.name].value = value
    setFiles?.({ ...files })
  }, 250)

  const handleTabsChange = (fileName: string) => {
    setFileName(fileName)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {showFileSelector ? (
        <Tabs onChange={handleTabsChange} readOnly={fileSelectorReadOnly} />
      ) : null}
      <Editor theme={theme} onChange={handleEditorChange} file={file} options={options} />
    </div>
  )
}
