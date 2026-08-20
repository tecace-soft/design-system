import * as React from 'react';
export interface FloatingActionButtonProps {
  icon?: React.ReactNode;
  label?: string;
  disable?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const FloatingActionButton: React.FC<FloatingActionButtonProps>;
export default FloatingActionButton;
