import * as React from 'react';
export interface BadgeProps {
  count?: number | string;
  dot?: boolean;
  max?: number;
  color?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
