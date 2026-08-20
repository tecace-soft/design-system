import * as React from "react";
/** Text input with a filtered suggestion dropdown. From Figma "Auto Complete/Auto Complete". */
export interface AutoCompleteProps {
  /** Suggestion strings to filter against the query. */
  options?: string[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: string) => void;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function AutoComplete(props: AutoCompleteProps): JSX.Element;
export default AutoComplete;
