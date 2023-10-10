import React, {useContext, useRef} from "react";
import iframe from "./iframe.html?raw";
import {useMount, useUpdateEffect} from "ahooks";
import {PlaygroundContext} from "../../PlaygroundContext.tsx";

const url = URL.createObjectURL(new Blob([iframe], {type: "text/html"}));

export const Preview: React.FC = () => {
  const {files} = useContext(PlaygroundContext);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function mapValues(
    originalObject: Record<string, any>,
    modifierFunction: any,
  ) {
    const modifiedObject = {};
    for (const key in originalObject) {
      if (originalObject.hasOwnProperty(key)) {
        // @ts-ignore
        modifiedObject[key] = modifierFunction(originalObject[key]);
      }
    }
    return modifiedObject;
  }

  // TODO 防抖
  const changeCode = () => {
    iframeRef.current?.contentWindow?.postMessage({
      type: "UPDATE_CODE",
      data: {
        imports: files["import-map.json"].value,
        files: mapValues(files, (o: any) => {
          if (!['import-map.json'].includes(o.name)) return o.value;
        }),
        entryFileName: "main.jsx",
      },
    });
  };

  useUpdateEffect(() => {
    changeCode();
  }, [files]);

  useMount(() => {
    window.addEventListener(
      "message",
      (msg) => {
        if (msg.data.type === "LOADED" && msg.data.data) {
          changeCode();
        }
      },
      false,
    );
  });

  return (
    <>
      <iframe
        ref={iframeRef}
        src={url}
        style={{width: "100vw", height: "100vh", padding: 0, border: "none"}}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      />
    </>
  );
};
