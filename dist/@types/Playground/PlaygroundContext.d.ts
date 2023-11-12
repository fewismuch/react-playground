import React from 'react';
import type { IPlaygroundContext } from './types';
export declare const PlaygroundContext: React.Context<IPlaygroundContext>;
export declare const PlaygroundProvider: (props: {
    children: React.ReactElement;
    saveOnUrl?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
