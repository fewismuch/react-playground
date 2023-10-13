export const pc = () => {
  return (
    <Sandpack
    theme={}
       customSetup={{
        entry: "/index.js",
        importmap:{}}
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
      }}
      files={{
        "/Wrapper.js": `export default () => "";`,

        "/Button.js": {
          code: `export default () => {
  return <button>Hello</button>
};`,
          readOnly: true, // Set as non-editable, defaults to `false`
          active: true, // Set as main file, defaults to `false`
          hidden: false, // Tab visibility, defaults to `false`
        },
      }}
    />
  );
};
