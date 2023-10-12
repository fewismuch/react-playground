export const CodeView = () => {
  useEffect(() => {
    if (isJsView) {
      if (selectedFileName?.endsWith(".jsx")) {
        compiler.postMessage({
          view: "js",
          data: files[selectedFileName].value,
          name: selectedFileName,
          files,
        });
      } else {
        setCompiledCode("");
      }
    }
  }, [selectedFileName]);

  return (
    <MonacoEditor
      className={"editor"}
      height="calc(100vh - 100px)"
      theme={`vs-${theme}`}
      language="javascript"
      value={compiledCode}
      onMount={handleEditorDidMount}
      options={{
        readOnly: true,
        automaticLayout: true,
        cursorBlinking: "smooth",
        fontLigatures: true,
        formatOnPaste: true,
        formatOnType: true,
        fontSize: 14,
        showDeprecated: true,
        showUnused: true,
        showFoldingControls: "mouseover",
        minimap: {
          autohide: true,
        },
        smoothScrolling: true,
        smartSelect: {
          selectSubwords: true,
          selectLeadingAndTrailingWhitespace: true,
        },
        tabSize: 2,
      }}
    />
  );
};
