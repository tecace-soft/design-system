import * as React from 'react';
export interface ContentBadgeProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "neutral" | "positive" | "negative" | "cautionary";
  variant?: "weak" | "solid";
  className?: string;
  style?: React.CSSProperties;
}
export declare const ContentBadge: React.FC<ContentBadgeProps>;
export default ContentBadge;
