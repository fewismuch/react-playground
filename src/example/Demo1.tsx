import { Playground } from '../Playground'

export const Demo1 = () => {
  const files = {
    'App.jsx': `import {title} from './const'

function App() {
  return <h1>this is {title}</h1>
}
export default App
`,
    'const.js': {
      code: 'export const title = "demo2"',
      readOnly: true,
    },
  }

  return (
    <>
      <h1>嵌入页面自定义代码示例：</h1>
      <Playground
        showHeader={false}
        showCompileOutput={false}
        fileSelectorReadOnly
        width={700}
        height={400}
        files={files}
        border
      />
      <h3>我是页面底部</h3>
    </>
  )
}
