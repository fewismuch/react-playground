import React, { useContext, useEffect } from 'react'

import { EditorContainer } from './components/EditorContainer'
import { Header } from './components/Header'
import { Output } from './components/Output'
import { SplitPane } from './components/SplitPane'
import { MAIN_FILE_NAME } from './files.ts'
import { PlaygroundContext, PlaygroundProvider } from './PlaygroundContext'
import { getMergedCustomFiles } from './utils'

import './index.less'

import type { PlaygroundProps } from './types'

const defaultCodeSandboxOptions = {
  theme: 'dark',
  editorHeight: '100vh'
}

const ReactPlayground = (props: PlaygroundProps) => {
  const {
    width = '100vw',
    height = '100vh',
    theme,
    importMap,
    files,
    showCompileOutput = true,
    showHeader = true,
    showFileSelector = true,
    fileSelectorReadOnly = false,
    onUrlChange
  } = props
  const { filesHash, changeTheme, setFiles } = useContext(PlaygroundContext)
  const options = Object.assign(defaultCodeSandboxOptions, props.options || {})

  useEffect(() => {
    if (files && !files?.[MAIN_FILE_NAME]) {
      throw new Error(
        `Missing required property : '${MAIN_FILE_NAME}' is a mandatory property for 'files'`
      )
    } else {
      const newFiles = getMergedCustomFiles(files, importMap)
      if (newFiles) setFiles(newFiles)
    }
  }, [files])

  useEffect(() => {
    if (theme) changeTheme(theme)
  }, [theme])

  useEffect(() => {
    onUrlChange?.(filesHash)
  }, [filesHash])

  return (
    <div id='react-playground' style={{ width, height }}>
      {showHeader ? <Header /> : null}
      <div style={{ height: `calc(100% - ${showHeader ? 50 : 0}px)` }}>
        <SplitPane>
          <EditorContainer
            options={options}
            showFileSelector={showFileSelector}
            fileSelectorReadOnly={fileSelectorReadOnly}
          />
          <Output showCompileOutput={showCompileOutput} />
        </SplitPane>
      </div>
    </div>
  )
}

export const Playground: React.FC<PlaygroundProps> = props => {
  return (
    <PlaygroundProvider>
      <ReactPlayground {...props} />
    </PlaygroundProvider>
  )
}
