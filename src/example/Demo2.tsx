import { PlaygroundSandbox } from '../Playground'

export const Demo2 = () => {
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
      <PlaygroundSandbox
        showHeader={false}
        fileSelectorReadOnly
        width={700}
        height={400}
        border
        theme='dark'
        options={{
          lineNumbers: false,
        }}
      />
      <div style={{ height: '60vh' }}></div>
      <div>滚动到可视范围内才会加载</div>
      <PlaygroundSandbox
        showHeader={false}
        width={700}
        height={400}
        files={files}
        border
        theme='dark'
        options={{
          lineNumbers: false,
        }}
      />
    </>
  )
}
