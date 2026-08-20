import * as React from 'react';
export interface ToastProps {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  leadingIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Toast: React.FC<ToastProps>;
export default Toast;
