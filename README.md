# react-exercise-playground

`react-exercise-playground` 是一个可在线编辑react代码并实时预览渲染效果的组件。

![截图](https://raw.githubusercontent.com/fewismuch/react-playground/main/src/example/index.png)

[查看示例](https://fewismuch.github.io/react-playground)

# 特点

- 可以在线编辑代码,提供实时交互式演示
- 代码自动保存到 URL 上, 分享网址即可分享代码
- 添加自定义文件，支持ts/tsx/js/jsx/css/json
- 支持动态引入其他标签页的代码
- 支持引入第三方依赖项（ESM包）
- 纯前端部署, 不依赖服务器
- 快速简单易用

# NEXT TODO

- [X]  发布npm包，支持项目内嵌入使用
- [X]  提供场景示例
- [ ]  丰富实用文档
- [X]  支持ts,tsx
- [X]  支持第三方依赖ts类型自动导入
- [ ]  发布1.0版本
- [ ]  编译器改为esbuild-wasm，提升预览速度

# 安装

```shell
npm install react-exercise-playground --save
# or
pnpm install react-exercise-playground --save
```

# 使用示例

```tsx
import {Playground} from 'react-exercise-playground'

export const Demo1 = () => {
  const files = {
    'App.tsx': `import {title} from './const'
function App() {
  return <h1>this is {title}</h1>
}
export default App
`,
    'const.ts': {
      code: 'export const title = "demo2";',
      readOnly: true,
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

```

![截图](https://raw.githubusercontent.com/fewismuch/react-playground/main/src/example/Demo1.png)

> 注意：作为组件使用会导致页面url变化（代码会存到hash中），建议在单独页面中使用。暂时无法一个页面多次使用组件，会有冲突，后续会更新解决

# Props

| Name                 | Type                                                                  | Default          | Description  |
|:---------------------|:----------------------------------------------------------------------|:-----------------|:-------------|
| width                | string丨number丨undefined                                               | 100vw            | 宽度           |
| height               | string丨number丨undefined                                               | 100vh            | 高度           |
| theme                | 'dark'丨'light'丨undefined                                              | 'light'          | 主题           |
| showHeader           | boolean丨undefined                                                     | true             | 是否显示头部       |
| border               | boolean丨undefined                                                     | false            | 是否显示边框       |
| showFileSelector     | boolean丨undefined                                                     | true             | 是否显示文件tab    |
| fileSelectorReadOnly | boolean丨undefined                                                     | false            | 文件tab是否只读    |
| onUrlChange          | (url: string) => void                                                 | undefined        |              |
| showCompileOutput    | boolean丨undefined                                                     | true             | 是否显示编译后代码    |
| defaultSizes         | number[]丨undefined                                                    | [100,100]        | 编辑器和预览区宽度比例  |
| options              | { lineNumbers?: boolean;fontSize?: number;tabSize?: number}丨undefined | undefined        | 编辑器配置        |
| files                | File                                                                  | Object           | 初始化代码        |
| importMap            | { imports: Record<string, string> }                                   | defaultImportMap | 初始化importmap |

### File
```ts
interface File {
  [key: string]:
| string
  | {
    code: string
    readOnly?: boolean
    active?: boolean
    hidden?: boolean
  }
}

```
### defaultImportMap
```json
{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"
  }
}
```
