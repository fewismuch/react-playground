import { editor } from 'monaco-editor';
import React from 'react';
export type ITheme = 'light' | 'dark';
export interface IFile {
    name: string;
    value: string;
    language: string;
    active?: boolean;
    hidden?: boolean;
}
export interface IFiles {
    [key: string]: IFile;
}
export interface ICustomFiles {
    [key: string]: string | {
        code: string;
        active?: boolean;
        hidden?: boolean;
    };
}
export interface ISplitPane {
    children?: React.ReactNode[];
    defaultSizes?: number[];
}
export type IEditorOptions = editor.IStandaloneEditorConstructionOptions & any;
export interface IEditorContainer {
    showFileSelector?: boolean;
    fileSelectorReadOnly?: boolean;
    options?: IEditorOptions;
}
export interface IOutput {
    showCompileOutput?: boolean;
}
export type IImportMap = {
    imports: Record<string, string>;
};
export type IPlayground = {
    width?: string | number;
    height?: string | number;
    theme?: ITheme;
    importMap?: IImportMap;
    files?: ICustomFiles;
    options?: {
        lineNumbers?: boolean;
        fontSize?: number;
        tabSize?: number;
    };
    showHeader?: boolean;
    border?: boolean;
    onFilesChange?: (url: string) => void;
    saveOnUrl?: boolean;
    autorun?: boolean;
} & Omit<IEditorContainer, 'options'> & IOutput & ISplitPane;
export interface IPlaygroundContext {
    files: IFiles;
    filesHash: string;
    theme: ITheme;
    selectedFileName: string;
    setSelectedFileName: (fileName: string) => void;
    setTheme: (theme: ITheme) => void;
    setFiles: (files: IFiles) => void;
    addFile: (fileName: string) => void;
    removeFile: (fileName: string) => void;
    updateFileName: (oldFieldName: string, newFieldName: string) => void;
    changeTheme: (theme: ITheme) => void;
}
export interface IPreviewData {
    compileCode: string;
    importmap: string;
}
export interface IPreview {
    hidden: boolean;
    data?: IPreviewData;
    iframeKey?: string;
}
export interface IFileSelector {
    onChange: (fileName: string) => void;
    onError: (msg: string) => void;
    readOnly?: boolean;
}
export interface ITabsItem {
    readOnlyTabs: string[];
    creating: boolean;
    value: string;
    actived: boolean;
    onOk: (name: string) => void;
    onCancel: () => void;
    onRemove: (name: string) => void;
    onClick: () => void;
    onValidate: (newName: string, oldName: string) => boolean;
}
export interface IMessageData {
    data: {
        type: string;
        message: string;
    };
}
export interface IMessage {
    type: 'error' | 'warn';
    context: string;
}
export interface IDialog {
    message: string;
    onConfirm: () => void;
    children: React.ReactNode;
}
export interface IViewSelector {
    onChange: (viewType: string) => void;
    items: string[];
    value?: string;
    hidden?: boolean;
}
