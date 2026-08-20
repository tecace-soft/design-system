import * as React from 'react';
export interface SwitchProps {
  active?: boolean;
  disable?: boolean;
  size?: "sm" | "md";
  onChange?: (next: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
