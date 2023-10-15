import {Header} from "./components/Header/index";
import {Output} from "./components/Output";
// @ts-ignore
import {Allotment} from "allotment";
import "allotment/dist/style.css";
import {PlaygroundProvider} from "./PlaygroundContext";
import {EditorContainer} from "./components/EditorContainer";
import React from "react";

// <Repl onUrlChange={(url)=>{}} imports={} showCompileOutput={} files={}/>

interface IProps {
  onUrlChange?: (url: string) => void
  importmap?: { imports: Record<string, string> }
  files?: any
  showCompileOutput?: boolean
}

export const Playground: React.FC<IProps> = (props) => {
  const {onUrlChange, importmap, files, showCompileOutput} = props
  return (
    <PlaygroundProvider>
      <div style={{width: "100vw", height: "100vh"}}>
        <Header></Header>
        <div style={{height: "calc(100vh - 50px)"}}>
          <Allotment defaultSizes={[100, 100]}>
            <EditorContainer/>
            <Output/>
          </Allotment>
        </div>
      </div>
    </PlaygroundProvider>
  );
};
