import type { IFiles } from '@/Playground/types';
export declare const icons: {
    DownloadSvg: string;
    GithubSvg: string;
    MoonSvg: string;
    ReactSvg: string;
    ShareSvg: string;
    SunSvg: string;
    SuccessSvg: string;
};
export declare function downloadFiles(files: IFiles): Promise<void>;
