import * as React from 'react';
export interface SelectOption { label: string; value: string; }
export interface SelectProps { options?: (string | SelectOption)[]; value?: string; placeholder?: string; label?: string; disable?: boolean; onChange?: (value: string) => void; className?: string; style?: React.CSSProperties; }
export declare const Select: React.FC<SelectProps>;
export default Select;
