import * as React from 'react';
export interface TextButtonProps { label?: string; size?: "sm"|"md"|"lg"; color?: "primary"|"neutral"|"assistive"; disable?: boolean; underline?: boolean; leadingIcon?: React.ReactNode; trailingIcon?: React.ReactNode; onClick?: (e: React.MouseEvent) => void; className?: string; style?: React.CSSProperties; }
export declare const TextButton: React.FC<TextButtonProps>;
export default TextButton;
