import React, { useContext } from 'react'

import { Editor } from './Editor'
import { Tabs } from './Tabs'
import { PlaygroundContext } from '../../PlaygroundContext'
import { debounce } from '../../utils'

import type { EditorContainerProps } from '../../types'

export const EditorContainer: React.FC<EditorContainerProps> = props => {
  const { showFileSelector, fileSelectorReadOnly, options = {} } = props
  const { theme, files, setFiles, selectedFileName, setSelectedFileName } =
    useContext(PlaygroundContext)
  const file = files[selectedFileName] || {}

  const handleEditorChange = debounce((value: string) => {
    files[file.name].value = value
    setFiles?.({ ...files })
  }, 250)

  const handleTabsChange = (fileName: string) => {
    setSelectedFileName(fileName)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {showFileSelector ? (
        <Tabs onChange={handleTabsChange} readOnly={fileSelectorReadOnly} />
      ) : null}
      <Editor
        theme={theme}
        onChange={handleEditorChange}
        file={file}
        options={options}
        selectFile={handleTabsChange}
      />
    </div>
  )
}
