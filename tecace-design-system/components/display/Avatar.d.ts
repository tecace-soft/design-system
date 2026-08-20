import * as React from 'react';
export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  variant?: "person" | "company";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;
  className?: string;
  style?: React.CSSProperties;
}
export interface AvatarGroupProps {
  avatars?: AvatarProps[];
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  max?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Avatar: React.FC<AvatarProps>;
export declare const AvatarGroup: React.FC<AvatarGroupProps>;
export default Avatar;
