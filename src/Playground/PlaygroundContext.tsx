import React, {createContext, useState} from 'react';
import {initFiles} from './files.ts'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface IPlaygroundProps {
  files: any,
  theme: Theme,
  setTheme?: (theme: Theme) => void
  setFiles?: (files: any) => void
  addFile?: () => void
  deleteFile?: () => void
  downloadApp?: () => void
}

const initialContext = {
  files: initFiles,
  theme: Theme.LIGHT,
}


export const PlaygroundContext = createContext<IPlaygroundProps>(initialContext);

export const PlaygroundProvider = (props: { children: React.ReactElement }) => {
  const {children} = props
  const [files, setFiles] = useState(initialContext.files);
  const [theme, setTheme] = useState(initialContext.theme)

  const addFile = () => {
  }
  const deleteFile = () => {
  }
  const downloadApp = () => {
  }

  return (
    <PlaygroundContext.Provider
      value={{theme, setTheme, files, setFiles, addFile, deleteFile, downloadApp}}>
      {children}
    </PlaygroundContext.Provider>
  );
};

