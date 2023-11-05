import { Monaco } from '@monaco-editor/react';
export declare const useEditor: () => {
    autoLoadExtraLib: (editor: any, monaco: any, defaultValue: string) => Promise<() => void>;
    doOpenEditor: (editor: any, input: any) => void;
    loadJsxSyntaxHighlight: (editor: any, monaco: Monaco) => {
        highlighter: (code?: string | undefined) => void;
        dispose: () => void;
    };
};
