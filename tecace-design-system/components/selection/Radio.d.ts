import * as React from 'react';
export interface RadioProps {
  checked?: boolean;
  disable?: boolean;
  size?: "sm" | "md";
  label?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (value: string | boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Radio: React.FC<RadioProps>;
export default Radio;
