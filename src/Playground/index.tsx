// @ts-ignore
import { Allotment } from 'allotment'
import React, { useContext, useEffect } from 'react'

import { EditorContainer } from './components/EditorContainer'
import { Header } from './components/Header'
import { Output } from './components/Output'
import { mainFileName } from './files.ts'
// eslint-disable-next-line import/order
import { PlaygroundContext, PlaygroundProvider } from './PlaygroundContext'

import 'allotment/dist/style.css'
import './index.less'

import { getMergedCustomFiles } from './utils.ts'

import type { PlaygroundProps } from './types'

const defaultCodeSandboxOptions = {
  editorHeight: '100vh'
}

const Layout = (props: PlaygroundProps) => {
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
    if (files && !files?.[mainFileName]) {
      throw new Error(
        `Missing required property : '${mainFileName}' is a mandatory property for 'files'`
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
        <Allotment defaultSizes={[100, 100]}>
          <EditorContainer
            options={options}
            showFileSelector={showFileSelector}
            fileSelectorReadOnly={fileSelectorReadOnly}
          />
          <Output showCompileOutput={showCompileOutput} />
        </Allotment>
      </div>
    </div>
  )
}

export const Playground: React.FC<PlaygroundProps> = props => {
  return (
    <PlaygroundProvider>
      <Layout {...props} />
    </PlaygroundProvider>
  )
}
