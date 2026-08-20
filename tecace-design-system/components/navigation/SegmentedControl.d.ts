import * as React from 'react';
export interface SegmentItem { label: string; value: string; }
export interface SegmentedControlProps { items?: (string | SegmentItem)[]; value?: string; onChange?: (value: string) => void; size?: "sm" | "md"; className?: string; style?: React.CSSProperties; }
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;
