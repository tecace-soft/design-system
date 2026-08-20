import * as React from 'react';
export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disable?: boolean;
  size?: "sm" | "md";
  label?: React.ReactNode;
  onChange?: (next: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
