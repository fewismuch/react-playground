import React, { createContext, useState } from "react";
import { initFiles } from "./files.ts";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface IPlaygroundProps {
  files: any;
  theme: Theme;
  setTheme?: (theme: Theme) => void;
  setFiles?: (files: any) => void;
  addFile?: () => void;
  removeFile?: () => void;
  updateFileName?: () => void;
  downloadApp?: () => void;
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

  const downloadApp = () => {};

  return (
    <PlaygroundContext.Provider
      value={{
        theme,
        setTheme,
        files,
        setFiles,
        addFile,
        removeFile,
        updateFileName,
        downloadApp,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
