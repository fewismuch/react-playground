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

export type PlaygroundProps = {
  width?: string | number
  height?: string | number
  theme?: Theme
  onUrlChange?: (url: string) => void
  importmap?: { imports: Record<string, string> }
  files?: Files
  options?: any
  showHeader?: boolean
} & EditorContainerProps &
  OutputProps
