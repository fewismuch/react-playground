import React, { useContext, useState } from "react";
import "./userWoker.ts";
import { Tabs } from "./Tabs/index";
import { PlaygroundContext } from "../../PlaygroundContext";
import { Editor as EditorR } from "./EditorR";
import { debounce } from "../../utils";

export const Editor: React.FC = () => {
  const { theme, files, setFiles } = useContext(PlaygroundContext);
  const [fileName, setFileName] = useState("main.jsx");
  const file = files[fileName] || {};

  const handleEditorChange = debounce((value: string) => {
    files[file.name].value = value;
    setFiles?.({ ...files });
  }, 250);

  const handleTabsChange = (fileName: string) => {
    setFileName(fileName);
  };

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <Tabs onChange={handleTabsChange} />
      <EditorR
        theme={theme}
        onChange={handleEditorChange}
        file={file}
      />
    </div>
  );
};
