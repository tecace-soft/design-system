import * as React from 'react';
export interface IconButtonProps {
  icon: React.ReactNode;
  variant?: "normal" | "background" | "outlined";
  size?: "sm" | "md" | "lg";
  disable?: boolean;
  "aria-label"?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
