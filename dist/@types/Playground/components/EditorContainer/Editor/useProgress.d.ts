export declare const useTypesProgress: () => {
    progress: number;
    total: number;
    finished: boolean;
    onWatch: (typeHelper: any) => () => void;
};
