import * as React from "react";
/** Icon that toggles color on/off (bookmark, like…). From Figma "Control/Toggle Icon". */
export interface ToggleIconProps {
  /** The glyph (SVG element). Painted with currentColor. */
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
export function ToggleIcon(props: ToggleIconProps): JSX.Element;
export default ToggleIcon;
