import * as React from 'react';
export interface DividerProps {
  vertical?: boolean;
  thickness?: number;
  inset?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Divider: React.FC<DividerProps>;
export default Divider;
