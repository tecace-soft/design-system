import * as React from 'react';
export interface CardProps {
  variant?: "outlined" | "elevated";
  padding?: number | string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Card: React.FC<CardProps>;
export default Card;
