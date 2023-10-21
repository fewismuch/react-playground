// @ts-ignore
import { Allotment } from 'allotment'
import React, { useContext, useEffect } from 'react'

import { EditorContainer } from './components/EditorContainer'
import { Header } from './components/Header'
import { Output } from './components/Output'
import { PlaygroundContext, PlaygroundProvider } from './PlaygroundContext'

import 'allotment/dist/style.css'

import type { PlaygroundProps } from './types'

const defaultCodeSandboxOptions = {
  editorHeight: '100vh'
}

const Layout = (props: PlaygroundProps) => {
  const {
    width = '100vw',
    height = '100vh',
    theme = 'light',
    importmap,
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
    onUrlChange?.(filesHash)
  }, [filesHash])

  useEffect(() => {
    if (theme) changeTheme(theme)
  }, [theme])

  useEffect(() => {
    if (files?.length) setFiles(files)
  }, [files])

  useEffect(() => {
    // 更新importmap文件内容
  }, [importmap])

  return (
    <div className='yutian-react-playground' style={{ width, height }}>
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
