import * as React from "react";
/** Multi-select chip: leading check + label; toggles selected. From Figma "Chip/Multi-Select". */
export interface ChipMultiSelectProps {
  label?: string;
  size?: "md" | "lg";
  state?: "default" | "selected" | "disabled" | "selected disabled";
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
export function ChipMultiSelect(props: ChipMultiSelectProps): JSX.Element;
export default ChipMultiSelect;
