# react-exercise-playground

`react-exercise-playground` 是一个可以在线编辑react代码并实时预览渲染效果的组件，支持ts，tsx，支持引入第三方库，支持自定义文件

![截图](https://raw.githubusercontent.com/fewismuch/react-playground/main/src/example/index.png)

[基础示例](https://fewismuch.github.io/react-playground)

[ahooks示例](https://fewismuch.github.io/react-playground/#eNqNU8tu2zAQ/JUtL5IAm+zj0MB1i/R16MFokVwagBdCom0l4gMkFdgQ9O9ZUrJjOQ4QQBCWszuj3R2qI0rUmga/I4uOaKEkWTxDM9IIvWnFJqJhb6UvXW0D4o+iaSNYK2tcgBspygBrZxRkLsYZ16epX39Xp9l5ZRQrm1rqWHgs/W7tWEUZxil1oNMSmUHeGBPyypStQi7dyPC7kTH8sf9T5ZnDbFa8K6iTupIu5xpgmRTobXB1GVamkt8iinj8GkuHJbtQU3BN+hnBqrPtHJA3L6eD1suVwRf043xia8yDz77ECdetLkNtdBw/L6CLHZVG+wAqcb4e6XmRCABOhtZpSPNh+1X9OA6FB3sMAX6mFcMcdgvokhodtv6/n8H+DLvrjxrsWWSi9w+HnahZBKZaEXmD0i3aKfVEC9eH0FRtwC7pLdlhajQK81zLXdp2JdeibdJlGhwcXJgrYem9N/rEyfPMxNEROXiZbOEjxXOCLQ6NcJKudEQ42YZg/YIx6RX1W5Yy1x+u6Ef6npPZhHDyD7zOjUUv+cPtucgaUtef6Gd6xUkk4G7wIX3/BJ7TRj4=)

[ant-design-charts示例](https://fewismuch.github.io/react-playground/#eNqllF1vmzAUhv+K5xsSKTWhbdomTats2iZNWjWpuxy7sMABT2Aj20zJEP99x8YE2tCr3iDznud8+NWBBpeUC2L0AW8aLGjJ8GaQFrigIqtpZlVzrJhOFK8M6H9pUVuRl5VUBj0zmhi0V7JEgbLnIBbj0OcfT+PoRSrLMCk4ExY8oR+rylMkhLML9ekkgUzDnqU0s1QmdQm5JGPmS8Hs8dPxWzoLFESD+Yc5UUykTM1igdDWVSA/jeKJeZIpe7Qq6LZb6F624QQzjwVuFxioV+70yjvMuT9duUHfuWCo9eEdFWAO0zwTYVVIoy0ai0QK3dnzgGZz9PCIGjt3J6fUUNB/dddq0JFRtUFBtF5HwQK5WTboCrWLc+ByAK4ngatRBbKKJpnrgVlNAqtRF7KeRG4G5GYSuB2A20ngbgCmW6wHIOrd+O3c7Y2E555nYKUzFzljfaGc8Sw3MP9y6ZXDV86KFErbDoEXj73oGvVqJbmAXF8VIc3/Wa98FN5zWoEQpJyWUqR9WjdiCyMipJiplUBbtywNIaSbtYUFhrhl2MHtU8r2tC7crtzb9e3W7KKkFfmjpRit8evIi3X2Sr/IbvTYp+gYny4TY7fQVolxbkylN2HIdEl0HrrILrojl2QZY38pnzD6Abyda6Hz/LNPZLLAGbWLoM4qxs5TsMx+3e1/UHKQHw==)

[antd示例](https://fewismuch.github.io/react-playground/#eNqtVV1r2zAU/SuaYCSBVE4Kg5E1pR/poA9doe3Yi180WU00bMlIcpMs+L/vSnKc2EmWrmuhIJ37oXPPuW5XOKNCEmsWeLTCkmYcjzZQH6dUTgs6dahd5twwLXIL+AtNCweKLFfaogdOmUXPWmWoo925E8vt0OT+bjt6kqgsYqng0iXWqZd5XmWRCM4+tC4nDCotf1DKdhPFigxqyZTbm5S749XyNul2NEQ7vQ89orlMuO7GEqEz34E8Wi2YvVMJP3co4O61yF/Ooj05vVjiso8hq6XOGnm1OCt0rbJ8iMp6OH/34zElTRh8jLo9ND5HK8dIc1toifwAwM/nB669L7Es4ZcvfO+EP9Mi9R0c2/DiSUZz8ssoucW6HWmwr5A1b08hrkpMjEeBlMO8fQ6J8cza3IyiiJuMmFnkIxfDz+SUDGLcbxRs+X241iXt1lNpk701LnDxiQwH5DTGLrsEYYJnXq6WaxvsP5YadK89vUy5tn10VVirZB895pTx2mJHzmXXPgWfPYlRaEy+Xteeh0UNLRKhObNCyXGMX+AJwWgaY2TsMuXj1QrNRWJnI9QZDgYfO6gs63V2fMIZoYwbAwNCi8eCMbigJ5GDk+u4GxuCJgQ3uJmp+S1wXd+Bp2NS2e/fCQMjI377DhlNHb2qoeULcLiiFH6+f5vcb5VHob5OAcvCgaXK0J8pD/ew7IfHutFaafTknztEPqmcDVqGiskGQ29CdjTkLmODvlqxBJaQ64ZUE26pSI+LdUycH1RLIacteSq+8xD8K2O/iQ1q6yEaPrdHms6UsY0ymEnJytIDMzmo+d4bV+JWPqvWyM0N8Anb5v47sKOmgITjUh74qPcqvP/DyrXIqF62ahC6hA84r8U4IPCRHdzvG4e/1+9r3SbZ/RPDZfkHDkymuw==)

# 特点

- 可以在线编辑代码,提供实时交互式演示
- 支持引入第三方库（ESM包）
- 自动从jsdelivr加载第三库ts类型文件
- 支持自定义文件并动态引入，支持ts/tsx/js/jsx/css/json
- 代码自动保存到 URL 上, 分享网址即可分享代码
- 纯前端部署, 不依赖服务器，可公司内部署使用内部包

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
| onFilesChange        | (url: string) => void                                                 | undefined        |              |
| showCompileOutput    | boolean丨undefined                                                     | true             | 是否显示编译后代码    |
| defaultSizes         | number[]丨undefined                                                    | [100,100]        | 编辑器和预览区宽度比例  |
| options              | { lineNumbers?: boolean;fontSize?: number;tabSize?: number}丨undefined | undefined        | 编辑器配置        |
| files                | File                                                                  | Object           | 初始化代码        |
| importMap            | { imports: Record<string, string> }                                   | defaultImportMap | 初始化importmap |
| saveOnUrl            | boolean                                                               | true             | 代码是否存储到url上  |

### File

```ts
interface File {
  [key: string]:
    | string
    | {
    code: string
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
