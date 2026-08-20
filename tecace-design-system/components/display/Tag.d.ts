import * as React from 'react';
export interface TagProps { label?: string; dotColor?: string; onRemove?: () => void; className?: string; style?: React.CSSProperties; }
export declare const Tag: React.FC<TagProps>;
export default Tag;
