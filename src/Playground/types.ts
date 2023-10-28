import { editor } from 'monaco-editor'
import React from 'react'

export type ITheme = 'light' | 'dark'

export interface IFile {
  name: string
  value: string
  language: string
}

export interface IFiles {
  [key: string]: IFile
}

export type IEditorOptions = editor.IStandaloneEditorConstructionOptions

export interface IEditorContainer {
  showFileSelector?: boolean
  fileSelectorReadOnly?: boolean
  options?: IEditorOptions
}

export interface IOutput {
  showCompileOutput?: boolean
}

export type IImportMap = { imports: Record<string, string> }

export type IPlayground = {
  width?: string | number
  height?: string | number
  theme?: ITheme
  importMap?: IImportMap
  files?: IFiles
  options?: IEditorOptions
  showHeader?: boolean
  border?: boolean
  onUrlChange?: (url: string) => void
} & IEditorContainer &
  IOutput

export interface IPlaygroundContext {
  files: IFiles
  filesHash: string
  theme: ITheme
  selectedFileName: string
  setSelectedFileName: (fileName: string) => void
  setTheme: (theme: ITheme) => void
  setFiles: (files: IFiles) => void
  addFile: (fileName: string) => void
  removeFile: (fileName: string) => void
  updateFileName: (oldFieldName: string, newFieldName: string) => void
  changeTheme: (theme: ITheme) => void
}

export interface IPreviewData {
  compileCode: string
  importmap: string
}

export interface IPreview {
  hidden: boolean
  data?: IPreviewData
  iframeKey?: string
}

export interface IFileSelector {
  onChange: (fileName: string) => void
  onError: (msg: string) => void
  readOnly?: boolean
}

export interface ITabsItem {
  readOnlyTabs: string[]
  creating: boolean
  value: string
  actived: boolean
  onOk: (name: string) => void
  onCancel: () => void
  onRemove: (name: string) => void
  onClick: () => void
  onValidate: (newName: string, oldName: string) => boolean
}

export interface IMessageData {
  data: { type: string; message: string | unknown }
}

export interface IMessage {
  type: 'error' | 'warn'
  context: string
}

export interface IDialog {
  message: string
  onConfirm: () => void
  children: React.ReactNode
}

export interface IViewSelector {
  onChange: (viewType: string) => void
  items: string[]
  value?: string
  hidden?: boolean
}
