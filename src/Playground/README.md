# TODO

编译器替换为esbuild

封装一个沙盒，接口如下
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
