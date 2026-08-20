import * as React from 'react';
/** Primary action button. Solid or outlined; primary or assistive; three sizes. */
export interface ButtonProps {
  label?: string;
  variant?: "solid" | "outlined";
  color?: "primary" | "assistive";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
  disable?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
