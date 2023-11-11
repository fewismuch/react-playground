import { Playground } from '../Playground'

export const Demo1 = () => {
  const files = {
    'App.tsx': `import {title} from './const'
function App() {
  return <h1>this is {title}</h1>
}
export default App
`,
    'const.ts': {
      code: 'export const title = "demo2"',
    },
  }

  return (
    <>
      <h1>作为组件使用：</h1>
      <Playground
        showHeader={false}
        showCompileOutput={false}
        fileSelectorReadOnly
        width={700}
        height={400}
        files={files}
        border
      />
    </>
  )
}
