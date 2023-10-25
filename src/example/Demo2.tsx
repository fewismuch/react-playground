import { Playground } from '../Playground/index'

export const Demo2 = () => {
  const files = {
    'App.jsx': {
      name: 'App.jsx',
      language: 'javascript',
      value: `function App() {
  return <h1>this is demo2</h1>
}
export default App
`
    }
  }

  return (
    <Playground
      showHeader={false}
      showCompileOutput={false}
      fileSelectorReadOnly
      width={600}
      height={400}
      files={files}
      border
    />
  )
}
