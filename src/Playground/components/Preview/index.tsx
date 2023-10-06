import React, {useEffect, useRef} from "react";
import iframe from './iframe.html?raw';
import {useMount, useUpdateEffect} from "ahooks";

interface Props {
  files: any
}

const url = URL.createObjectURL(new Blob([iframe], {type: 'text/html'}));

export const Preview: React.FC<Props> = ({files}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // compiler?.addEventListener('message', ({ data }) => {
  //   if (data.type === 'UPDATE_CODE') {
  //     iframeRef.current?.contentWindow?.postMessage(data);
  //   }
  // });

  function mapValues(originalObject: Record<string, any>, modifierFunction: any) {
    const modifiedObject = {};
    for (const key in originalObject) {
      if (originalObject.hasOwnProperty(key)) {
        modifiedObject[key] = modifierFunction(originalObject[key]);
      }
    }
    return modifiedObject;
  }

  // TODO 防抖
  const changeCode = () => {
    iframeRef.current?.contentWindow?.postMessage({
      type: 'UPDATE_CODE',
      data: {
        importmap: {
          "react": "https://esm.sh/react",
          "react-dom/client": "https://esm.sh/react-dom/client",
        },
        compileCode: `console.log("ok")`,
        files: mapValues(files, o => o.value)
      }
    })
  }

  useUpdateEffect(() => {
    changeCode()
  }, [files])

  useMount(()=>{
    window.addEventListener('message', (msg)=>{
      if(msg.data.type==='LOADED' && msg.data.data) {
        changeCode()
      }
    }, false);
  })

  return (
    <>
      <iframe
        ref={iframeRef}
        src={url}
        style={{width: '100vw', height: '100vh', padding: 0, border: "none"}}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      />
    </>
  );
}
