import * as React from 'react';
export interface CategoryProps {
  items?: (string | { label: string; value?: string })[];
  value?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}
export declare const Category: React.FC<CategoryProps>;
export default Category;
