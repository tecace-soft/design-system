import * as React from 'react';
export interface TabItem { label: string; value?: string; }
export interface TabProps {
  items?: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}
export declare const Tab: React.FC<TabProps>;
export default Tab;
