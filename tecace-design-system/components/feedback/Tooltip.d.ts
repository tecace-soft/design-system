import * as React from 'react';
export interface TooltipProps {
  label?: string;
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}
export declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
