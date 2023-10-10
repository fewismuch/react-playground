import {Header} from "./components/Header";
import {Editor} from "./components/Editor/Editor.tsx";
import {Preview} from "./components/Preview";
// @ts-ignore
import {Allotment} from "allotment";
import "allotment/dist/style.css";
import {PlaygroundProvider} from "./PlaygroundContext.tsx";


export const Playground = () => {

  return <PlaygroundProvider>
    <div style={{width: '100vw', height: '100vh'}}>
      <Header></Header>
      <div style={{height: 'calc(100vh - 50px)'}}>
        <Allotment>
          <Editor/>
          <Preview/>
        </Allotment>
      </div>
    </div>
  </PlaygroundProvider>
}
