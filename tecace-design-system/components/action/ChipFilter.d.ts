import * as React from "react";
/** Filter chip: pill + trailing chevron + optional count. From Figma "Chip/Filter". */
export interface ChipFilterProps {
  label?: string;
  /** Selection count shown before the chevron. */
  count?: string | number;
  size?: "md" | "lg";
  state?: "default" | "selected" | "disabled" | "selected disabled";
  /** Flip the chevron (open/closed). */
  expand?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
export function ChipFilter(props: ChipFilterProps): JSX.Element;
export default ChipFilter;
