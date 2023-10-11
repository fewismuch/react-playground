import React, { useEffect, useContext, useRef, useState } from "react";
import MonacoEditor, { Monaco } from "@monaco-editor/react";
import "./userWoker.ts";
import { useEditor } from "./useEditor.ts";
import { Tabs } from "./Tabs.tsx";
import { PlaygroundContext } from "../../PlaygroundContext.tsx";

export const Editor: React.FC = () => {
  const { theme, files, setFiles } = useContext(PlaygroundContext);
  const editorRef = useRef<any>(null);
  const [fileName, setFileName] = useState("main.jsx");
  const file = files[fileName] || {};

  function handleEditorChange(value: any, event: any) {
    // TODO 防抖
    // const newFiles = JSON.parse(JSON.stringify(files));
    // newFiles[activatedTab].value = value;
    // setFiles?.(newFiles);
    files[file.name].value = value;
    //setFile({ ...file, value });
    setFiles?.({ ...files });
  }

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
    // 格式化代码
    // editor.getAction("editor.action.formatDocument")?.run();
  };

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach((marker) => {
      // 页面输出错误信息
      console.log("onValidate:", marker.message);
    });
  }

  const handleTabsChange = (fileName: string) => {
    setFileName(fileName);
  };

  useEffect(() => {
    editorRef.current?.focus();
  }, [fileName]);

  return (
    <>
      <Tabs onChange={handleTabsChange} />
      <MonacoEditor
        className={"editor"}
        height="calc(100vh - 88px)"
        theme={`vs-${theme}`}
        path={file.name}
        language={file.language}
        value={file.value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
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
    </>
  );
};
