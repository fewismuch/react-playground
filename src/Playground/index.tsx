import { Header } from "./components/Header/index";
import { Editor } from "./components/Editor/index";
import { Preview } from "./components/Preview/index";
// 分割线颜色，其他分隔组件
// @ts-ignore
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { PlaygroundProvider } from "./PlaygroundContext";

export const Playground = () => {
  return (
    <PlaygroundProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Header></Header>
        <div style={{ height: "calc(100vh - 50px)" }}>
          <Allotment>
            <Editor />
            <Preview />
          </Allotment>
        </div>
      </div>
    </PlaygroundProvider>
  );
};
