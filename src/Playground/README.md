# TODO

- 代码整理，包括代码规范配置
- 开源工程须知项，文档编写
- 发包并开源
- 编译器替换为esbuild
- 支持ts
- 支持自动导入ts类型定义
- 封装成沙盒组件，接口如下，参考sandpack
```jsx
export const Sandpack = () => {
  return (
    <Sandpack
      theme={}
       customSetup={{
        entry: "/index.js",
        importmap:{},
        dependencies: { 
          "react-markdown": "latest" 
        }
      }}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"]
        visibleFiles: ["/App.js", "/button.js", "/index.js"],
        activeFile: "/button.js",
        showTabs: true,
        closableTabs: true,
        showLineNumbers: false,
        autoReload: false,
        rtl: true, // default false
        editorWidthPercentage: 60, // default - 50
      }}
      files={{
        "/Wrapper.js": `export default () => "";`,
        "/Button.js": {
          code: ``,
          readOnly: true, // Set as non-editable, defaults to `false`
          active: true, // Set as main file, defaults to `false`
          hidden: false, // Tab visibility, defaults to `false`
        },
      }}
    />
  );
};
```
