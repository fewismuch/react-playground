import { Header } from './components/Header/index'
import { Output } from './components/Output'
// @ts-ignore
import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import { PlaygroundProvider, Theme, PlaygroundContext } from './PlaygroundContext'
import { EditorContainer } from './components/EditorContainer'
import React, { useEffect, useContext } from 'react'
import { PlaygroundProps, EditorContainerProps, OutputProps } from './types'

type Props = PlaygroundProps & EditorContainerProps & OutputProps

const defaultCodeSandboxOptions = {
  editorHeight: '100vh'
}

const Layout = (props: Props) => {
  const {
    width = '100vw',
    height = '100vh',
    theme,
    onUrlChange,
    importmap,
    files,
    showCompileOutput = true,
    showHeader = true,
    showFileSelector = true,
    fileSelectorReadOnly = false
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
    <div style={{ width, height }}>
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

export const Playground: React.FC<Props> = props => {
  return (
    <PlaygroundProvider>
      <Layout {...props} />
    </PlaygroundProvider>
  )
}
