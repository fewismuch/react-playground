import { ATABootstrapConfig } from '@typescript/ata';
type DelegateListener = Required<{
    [k in keyof ATABootstrapConfig['delegate']]: Set<NonNullable<ATABootstrapConfig['delegate'][k]>>;
}>;
type InferSet<T> = T extends Set<infer U> ? U : never;
export declare function createATA(): Promise<{
    acquireType: (code: string) => void;
    addListener: <T extends "receivedFile" | "progress" | "errorMessage" | "started" | "finished">(event: T, handler: InferSet<Required<{
        receivedFile?: Set<(code: string, path: string) => void> | undefined;
        progress?: Set<(downloaded: number, estimatedTotal: number) => void> | undefined;
        errorMessage?: Set<(userFacingMessage: string, error: Error) => void> | undefined;
        started?: Set<() => void> | undefined;
        finished?: Set<(files: Map<string, string>) => void> | undefined;
    }>[T]>) => void;
    removeListener: <T_1 extends "receivedFile" | "progress" | "errorMessage" | "started" | "finished">(event: T_1, handler: InferSet<Required<{
        receivedFile?: Set<(code: string, path: string) => void> | undefined;
        progress?: Set<(downloaded: number, estimatedTotal: number) => void> | undefined;
        errorMessage?: Set<(userFacingMessage: string, error: Error) => void> | undefined;
        started?: Set<() => void> | undefined;
        finished?: Set<(files: Map<string, string>) => void> | undefined;
    }>[T_1]>) => void;
    dispose: () => void;
}>;
export {};
