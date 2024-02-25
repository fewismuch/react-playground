import React, { useContext, useState } from 'react'

import { Editor } from './Editor'
import { FileSelector } from './FileSelector'
import { Message } from '../Message'

import { PlaygroundContext } from '@/Playground/PlaygroundContext'
import type { IEditorContainer } from '@/Playground/types'
import { debounce } from '@/Playground/utils'

export const EditorContainer: React.FC<IEditorContainer> = (props) => {
  const { showTabs, fileSelectorReadOnly, options = {} } = props
  const { files, setFiles, selectedFileName, setSelectedFileName } = useContext(PlaygroundContext)
  const [error, setError] = useState('')
  const file = files[selectedFileName] || {}

  // 修改为保存的时候才出发编译渲染
  const handleEditorChange = debounce((value: string) => {
    // files[file.name].value = value
    // setFiles({ ...files })
    console.log(value)
  }, 250)

  const handleTabsChange = (fileName: string) => {
    setSelectedFileName(fileName)
  }

  const handleTabsError = (msg: string) => {
    setError(msg)
  }

  const handleInputSave = debounce((value: string) => {
    files[file.name].value = value
    setFiles({ ...files })
  }, 250)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {showTabs ? (
        <FileSelector
          onChange={handleTabsChange}
          onError={handleTabsError}
          readOnly={fileSelectorReadOnly}
        />
      ) : null}

      <Editor
        onChange={handleEditorChange}
        file={file}
        options={options}
        onSave={handleInputSave}
      />
      <Message type='error' context={error} />
    </div>
  )
}
