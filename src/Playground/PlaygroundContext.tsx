import { createContext, useState, useEffect } from "react";
import { initFiles } from "./files";
import { utoa } from "./utils";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface IPlaygroundProps {
  files: any;
  theme: Theme;
  selectedFileName?: string;
  setSelectedFileName?: () => void;
  setTheme?: (theme: Theme) => void;
  setFiles?: (files: any) => void;
  addFile?: () => void;
  removeFile?: () => void;
  updateFileName?: () => void;
}

const initialContext = {
  files: initFiles,
  theme: Theme.LIGHT,
};

export const PlaygroundContext =
  createContext<IPlaygroundProps>(initialContext);

export const PlaygroundProvider = (props: { children: React.ReactElement }) => {
  const { children } = props;
  const [files, setFiles] = useState(initialContext.files);
  const [theme, setTheme] = useState(initialContext.theme);
  const [selectedFileName, setSelectedFileName] = useState("");

  const addFile = (name: string) => {
    files[name] = {
      name,
      language: "javascript",
      value: "",
    };
    setFiles({ ...files });
  };
  const removeFile = (name: string) => {
    delete files[name];
    setFiles({ ...files });
  };

  // TODO 根据文件名后缀匹配文件类型
  const updateFileName = (oldFieldName: string, newFieldName: string) => {
    if (
      !files.hasOwnProperty(oldFieldName) ||
      newFieldName === undefined ||
      newFieldName === null
    )
      return;
    const { [oldFieldName]: value, ...rest } = files;
    const newFile = {
      [newFieldName]: {
        ...value,
        name: newFieldName,
      },
    };
    setFiles({
      ...rest,
      ...newFile,
    });
  };

  useEffect(() => {
    window.location.hash = utoa(JSON.stringify(files));
  }, [files]);

  return (
    <PlaygroundContext.Provider
      value={{
        theme,
        setTheme,
        files,
        selectedFileName,
        setSelectedFileName,
        setFiles,
        addFile,
        removeFile,
        updateFileName,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
