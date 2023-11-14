import React from 'react';
import type { IEditorOptions, IFile } from '@/Playground/types';
import './jsx-highlight.less';
import './useEditorWoker';
interface Props {
    file: IFile;
    onChange?: (code: string | undefined) => void;
    options?: IEditorOptions;
}
export declare const Editor: React.FC<Props>;
export {};
