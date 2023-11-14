import type { IFile, IFiles } from '@/Playground/types';
export declare const getModuleFile: (files: IFiles, moduleName: string) => IFile;
export declare const json2Js: (file: IFile) => string;
export declare const css2Js: (file: IFile) => string;
export declare const beforeTransformCodeHandler: (filename: string, code: string) => string;
