import { Output } from './components/Output'
// @ts-ignore
import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import { PlaygroundContext, PlaygroundProvider } from './PlaygroundContext'
import React, { useContext, useEffect } from 'react'
import { EditorContainer } from './components/EditorContainer'

interface IProps {
  theme: string
  files: any
  options?: any
}

export const Playground: React.FC<IProps> = props => {
  return (
    <PlaygroundProvider>
      <div style={{ width: '100%', height: '100%' }}>
        <InitPlay {...props} />
        <div style={{ height: '100%' }}>
          <Allotment defaultSizes={[100, 100]}>
            <EditorContainer simple={true} options={props.options} />
            <Output simple={true} />
          </Allotment>
        </div>
      </div>
    </PlaygroundProvider>
  )
}

function InitPlay(props) {
  const { theme, files } = props
  const { changeTheme, setFiles } = useContext(PlaygroundContext)

  useEffect(() => {
    changeTheme(theme)
    setFiles?.(files)
  }, [theme, files])

  return <></>
}
