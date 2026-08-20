import * as React from 'react';
export interface SkeletonProps { variant?: "line" | "title" | "rect" | "circle"; width?: number | string; height?: number; radius?: number; className?: string; style?: React.CSSProperties; }
export declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
