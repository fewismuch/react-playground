import React, { useContext, useState } from 'react'
import { Tabs } from './Tabs'
import { PlaygroundContext } from '../../PlaygroundContext'
import { Editor } from './Editor'
import { debounce } from '../../utils'

interface IProps {
  simple?: boolean
  options?: any
}

export const EditorContainer: React.FC<IProps> = props => {
  const { simple, options = {} } = props
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
      <Tabs onChange={handleTabsChange} readOnly={simple} />
      <Editor theme={theme} onChange={handleEditorChange} file={file} options={options} />
    </div>
  )
}
