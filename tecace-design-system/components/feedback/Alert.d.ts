import * as React from 'react';
export interface AlertProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  layout?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
}
export declare const Alert: React.FC<AlertProps>;
export default Alert;
