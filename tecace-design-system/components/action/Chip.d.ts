import * as React from 'react';
export interface ChipProps {
  label?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "normal" | "alternative";
  active?: boolean;
  disable?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Chip: React.FC<ChipProps>;
export default Chip;
