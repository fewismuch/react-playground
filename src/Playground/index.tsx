import  {useState} from "react";
import {Header} from "./components/Header";
import {Editor} from "./components/Editor/Editor.tsx";
import {Preview} from "./components/Preview";
// @ts-ignore
import {Allotment} from "allotment";
import "allotment/dist/style.css";
import {initFiles} from './files.ts'
import {PlaygroundProvider} from "./PlaygroundContext.tsx";


export const Playground = () => {
  const [files, setFiles] = useState(initFiles)

  return <PlaygroundProvider>
    <div style={{width: '100vw', height: '100vh'}}>
      <Header></Header>
      <Allotment>
        <Editor theme='vs-light' files={files} onChange={(newFiles) => setFiles(newFiles)}></Editor>
        <Preview files={files}></Preview>
      </Allotment>
    </div>
  </PlaygroundProvider>
}
