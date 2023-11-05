import React, { createContext, useEffect, useState } from 'react'

import { initFiles, MAIN_FILE_NAME } from './files.ts'
import { IPlaygroundContext, ITheme } from './types.ts'
import { fileName2Language, getPlaygroundTheme, setPlaygroundTheme, utoa } from './utils.ts'

const initialContext: Partial<IPlaygroundContext> = {
  files: initFiles,
  selectedFileName: MAIN_FILE_NAME,
}

export const PlaygroundContext = createContext<IPlaygroundContext>(
  initialContext as IPlaygroundContext
)

export const PlaygroundProvider = (props: { children: React.ReactElement }) => {
  const { children } = props

  const [files, setFiles] = useState(initialContext.files!)
  const [theme, setTheme] = useState(initialContext.theme!)
  const [selectedFileName, setSelectedFileName] = useState(initialContext.selectedFileName!)
  const [filesHash, setFilesHash] = useState('')

  const addFile = (name: string) => {
    files[name] = {
      name,
      language: fileName2Language(name),
      value: '',
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
        language: fileName2Language(newFieldName),
        name: newFieldName,
      },
    }
    setFiles({
      ...rest,
      ...newFile,
    })
  }

  const changeTheme = (theme: ITheme) => {
    setPlaygroundTheme(theme)
    setTheme(theme)
  }

  useEffect(() => {
    const hash = utoa(JSON.stringify(files))
    window.location.hash = hash
    setFilesHash(hash)
  }, [files])

  useEffect(() => {
    changeTheme(getPlaygroundTheme())
  }, [])

  return (
    <PlaygroundContext.Provider
      value={{
        theme,
        filesHash,
        files,
        selectedFileName,
        setTheme,
        changeTheme,
        setSelectedFileName,
        setFiles,
        addFile,
        removeFile,
        updateFileName,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}
