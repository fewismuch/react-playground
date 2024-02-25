import React, { useContext, useEffect } from 'react'

import { EditorContainer } from './components/EditorContainer'
import { Header } from './components/Header'
import { Output } from './components/Output'
import { Sandbox } from './components/Sandbox'
import { SplitPane } from './components/SplitPane'
import { ENTRY_FILE_NAME, initFiles, MAIN_FILE_NAME } from './files'
import { PlaygroundContext, PlaygroundProvider } from './PlaygroundContext'
import { getCustomActiveFile, getMergedCustomFiles, getPlaygroundTheme } from './utils'

import './index.less'
import type { IPlayground } from './types'
import { FilesExplorer } from '@/Playground/components/FileExplorer'

const defaultCodeSandboxOptions = {
  theme: 'dark',
  editorHeight: '100vh',
  showUrlHash: true,
}

const ReactPlayground = (props: IPlayground) => {
  const {
    width = '100vw',
    height = '100vh',
    theme,
    files: propsFiles,
    importMap,
    showHeader = true,
    showTabs = true,
    fileSelectorReadOnly = false,
    border = false,
    defaultSizes,
    onFilesChange,
    autorun = true,
  } = props
  const { filesHash, changeTheme, files, setFiles, setSelectedFileName } =
    useContext(PlaygroundContext)
  const options = Object.assign(defaultCodeSandboxOptions, props.options || {})

  useEffect(() => {
    if (propsFiles && !propsFiles?.[MAIN_FILE_NAME]) {
      throw new Error(
        `Missing required property : '${MAIN_FILE_NAME}' is a mandatory property for 'files'`
      )
    } else if (propsFiles) {
      const newFiles = getMergedCustomFiles(propsFiles, importMap)
      if (newFiles) setFiles(newFiles)
      const selectedFileName = getCustomActiveFile(propsFiles)
      if (selectedFileName) setSelectedFileName(selectedFileName)
    }
  }, [propsFiles])

  useEffect(() => {
    onFilesChange?.(filesHash)
  }, [filesHash])

  useEffect(() => {
    setTimeout(() => {
      if (!theme) {
        changeTheme(getPlaygroundTheme())
      } else {
        changeTheme(theme)
      }
    }, 15)
  }, [theme])

  useEffect(() => {
    if (!propsFiles) setFiles(initFiles)
  }, [])

  return files[ENTRY_FILE_NAME] ? (
    <div
      data-id='react-playground'
      className={theme}
      style={{
        width,
        height,
        boxSizing: 'border-box',
        border: border ? '1px solid var(--border)' : '',
      }}
    >
      {showHeader ? <Header /> : null}
      <div style={{ height: `calc(100% - ${showHeader ? 50 : 0}px)` }}>
        <SplitPane defaultSizes={defaultSizes}>
          <FilesExplorer />
          <EditorContainer
            options={options}
            showTabs={showTabs}
            fileSelectorReadOnly={fileSelectorReadOnly}
          />
          {autorun ? <Output /> : null}
        </SplitPane>
      </div>
    </div>
  ) : null
}

export const Playground: React.FC<IPlayground> = (props) => {
  return (
    <PlaygroundProvider saveOnUrl={props.saveOnUrl}>
      <ReactPlayground {...props} />
    </PlaygroundProvider>
  )
}

export const PlaygroundSandbox = Sandbox
