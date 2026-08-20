import * as React from 'react';
export interface ProgressBarProps { value?: number; indeterminate?: boolean; height?: number; color?: string; className?: string; style?: React.CSSProperties; }
export declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
