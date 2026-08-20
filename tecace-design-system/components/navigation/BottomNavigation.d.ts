import * as React from 'react';
export interface BottomNavItem { label: string; value?: string; icon?: React.ReactNode; }
export interface BottomNavigationProps {
  items?: BottomNavItem[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const BottomNavigation: React.FC<BottomNavigationProps>;
export default BottomNavigation;
