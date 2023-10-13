import React, { useEffect, useMemo, useRef } from "react";
import MonacoEditor, { Monaco } from "@monaco-editor/react";
import "./userWoker.ts";
import { MonacoEditorConfig } from "./config";

export const Editor: React.FC = ({ file, theme, onChange, options }) => {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
  };

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach((marker) => {
      // 页面输出错误信息
      console.log("onValidate:", marker.message);
    });
  }

  useEffect(() => {
    editorRef.current?.focus();
  }, [file.name]);

  return useMemo(
    () => (
      <>
        <MonacoEditor
          className={"editor"}
          height="calc(100vh - 88px)"
          theme={`vs-${theme}`}
          path={file.name}
          language={file.language}
          value={file.value}
          onChange={onChange}
          onMount={handleEditorDidMount}
          options={{
            ...MonacoEditorConfig,
            ...options,
          }}
        />
      </>
    ),
    [file],
  );
};
