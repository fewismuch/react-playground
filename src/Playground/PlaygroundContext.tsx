import React, { createContext, useEffect, useState } from 'react'

import { initFiles, mainFileName } from './files'
import { PlaygroundContextProps, Theme } from './types.ts'
import { getPlaygroundTheme, setPlaygroundTheme, utoa } from './utils'

const initialContext: Partial<PlaygroundContextProps> = {
  files: initFiles,
  theme: 'dark',
  selectedFileName: mainFileName
}

export const PlaygroundContext = createContext<PlaygroundContextProps>(
  initialContext as PlaygroundContextProps
)

export const PlaygroundProvider = (props: { children: React.ReactElement }) => {
  const { children } = props

  const [files, setFiles] = useState(initialContext.files!)
  const [theme, setTheme] = useState(initialContext.theme!)
  const [selectedFileName, setSelectedFileName] = useState(initialContext.selectedFileName!)
  const [filesHash, setFilesHash] = useState('')

  // TODO 根据文件名后缀匹配文件类型
  const addFile = (name: string) => {
    files[name] = {
      name,
      language: 'javascript',
      value: ''
    }
    setFiles({ ...files })
  }

  const removeFile = (name: string) => {
    delete files[name]
    setFiles({ ...files })
  }

  const updateFileName = (oldFieldName: string, newFieldName: string) => {
    if (!files[oldFieldName] || newFieldName === undefined || newFieldName === null) return
    const { [oldFieldName]: value, ...rest } = files
    const newFile = {
      [newFieldName]: {
        ...value,
        name: newFieldName
      }
    }
    setFiles({
      ...rest,
      ...newFile
    })
  }

  const changeTheme = (theme: Theme) => {
    setPlaygroundTheme(theme)
    setTheme(theme)
  }

  useEffect(() => {
    window.location.hash = utoa(JSON.stringify(files))
    setFilesHash(window.location.hash)
  }, [files])

  useEffect(() => {
    changeTheme(getPlaygroundTheme())
  }, [])

  return (
    <PlaygroundContext.Provider
      value={{
        theme,
        filesHash,
        setTheme,
        changeTheme,
        files,
        selectedFileName,
        setSelectedFileName,
        setFiles,
        addFile,
        removeFile,
        updateFileName
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}
