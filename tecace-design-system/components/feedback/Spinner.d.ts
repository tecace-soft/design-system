import * as React from 'react';
export interface SpinnerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
