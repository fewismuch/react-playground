import React, { useContext, useRef, useEffect, useState } from "react";
import iframe from "./iframe.html?raw";
import { PlaygroundContext } from "../../PlaygroundContext";
import CompilerWorker from "./compiler.worker.ts?worker";
import styles from "./index.module.less";
import { Editor as EditorR } from "../Editor/EditorR";

// 判断浏览器是否支持esm ，不支持的话引入 https://cdn.jsdelivr.net/npm/es-module-shims@1.8.0/dist/es-module-shims.min.js
const url = URL.createObjectURL(new Blob([iframe], { type: "text/html" }));

export const Preview: React.FC = () => {
  const { files, theme, selectedFileName } = useContext(PlaygroundContext);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [view, setView] = useState("preview");
  const isPreview = view === "preview";
  const isJsView = view === "js";
  const [compiledCode, setCompiledCode] = useState("");

  const compiler = new CompilerWorker();

  useEffect(() => {
    compiler.postMessage(files);
    // TODO 错开时间发送
    // if (isJsView) {
    //   compiler.postMessage({
    //     view: "js",
    //     data: files[selectedFileName].value,
    //     name: selectedFileName,
    //     files,
    //   });
    // }
  }, [files]);

  compiler?.addEventListener("message", ({ data }) => {
    console.log(data);
    if (data.type === "UPDATE_CODE") {
      data.data.importmap = files["import-map.json"].value;
      iframeRef.current?.contentWindow?.postMessage(data);
    } else if (data.type === "UPDATE_CODE_JS") {
      // 更新js视图
      setCompiledCode(data.data);
    }
  });

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    // 格式化代码
    editor.getAction("editor.action.formatDocument")?.run();
  };

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
    <>
      <div className={styles.tabs}>
        <div
          className={[styles.tabItem, isPreview ? styles.activated : ""].join(
            " ",
          )}
          onClick={() => setView("preview")}
        >
          PREVIEW
        </div>
        <div
          className={[styles.tabItem, isJsView ? styles.activated : ""].join(
            " ",
          )}
          onClick={() => setView("js")}
        >
          JS
        </div>
      </div>
      <iframe
        ref={iframeRef}
        src={url}
        style={{
          width: "100%",
          height: "calc(100% - 38px)",
          padding: 0,
          border: "none",
          display: isPreview ? "" : "none",
        }}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      />
      <div style={{ display: isJsView ? "" : "none" }}>
        <EditorR
          theme={theme}
          file={{ value: compiledCode }}
          options={{ readOnly: true }}
        />
      </div>
    </>
  );
};
