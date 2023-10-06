import React, {createContext, useState} from 'react';
import {initFiles} from './files.ts'

type Theme = 'light' | 'dark'

interface IPlaygroundProps {
  theme: Theme,
  files: any,
  setTheme?: (theme: Theme) => void,
  updateFile?: () => void,
  addFile?: () => void,
  deleteFile?: () => void,
  downloadApp?: () => void,
}

const initialContext: IPlaygroundProps = {
  files: initFiles,
  theme: 'light',
}

export const PlaygroundContext = createContext<IPlaygroundProps>(initialContext);

export const PlaygroundProvider = (props: { children: React.ReactElement }) => {
  const {children} = props
  const [files, setFiles] = useState(initialContext.files);
  const [theme, setTheme] = useState<Theme>(initialContext.theme)

  const addFile = () => {
  }
  const deleteFile = () => {
  }
  const downloadApp = () => {
  }

  const updateFile = () => {
  }

  return (
    <PlaygroundContext.Provider value={{theme, setTheme, files, updateFile, addFile, deleteFile, downloadApp}}>
      {children}
    </PlaygroundContext.Provider>
  );
};

