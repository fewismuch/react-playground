export type Theme = 'light' | 'dark'

export interface File {
  name: string
  value: string
  language: string
}

export interface Files {
  [key: string]: File
}

export interface EditorContainerProps {
  showFileSelector?: boolean
  fileSelectorReadOnly?: boolean
  options?: any
}

export interface OutputProps {
  showCompileOutput?: boolean
}

export type ImportMap = { imports: Record<string, string> }

export type PlaygroundProps = {
  width?: string | number
  height?: string | number
  theme?: Theme
  importMap?: ImportMap
  files?: Files
  options?: any
  showHeader?: boolean
  onUrlChange?: (url: string) => void
} & EditorContainerProps &
  OutputProps

export interface PlaygroundContextProps {
  files: Files
  filesHash: string
  theme: Theme
  selectedFileName: string
  setSelectedFileName: (fileName: string) => void
  setTheme: (theme: Theme) => void
  setFiles: (files: Files) => void
  addFile: (fileName: string) => void
  removeFile: (fileName: string) => void
  updateFileName: (oldFieldName: string, newFieldName: string) => void
  changeTheme: (theme: Theme) => void
}

export interface PreviewData {
  compileCode: string
  importmap: string
}

export interface FileSelectorProps {
  onChange: (fileName: string) => void
  readOnly?: boolean
}

export interface TabsItemProps {
  readOnlyTabs: string[]
  creating: boolean
  tabs: string[]
  value: string
  actived: boolean
  onOk: (name: string) => void
  onCancel: () => void
  onRemove: (name: string) => void
  onClick: () => void
}
