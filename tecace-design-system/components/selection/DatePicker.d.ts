import * as React from "react";
/** iOS-style triple wheel date picker (year / month / day). From Figma "Date Picker/iOS/Wheel". */
export interface DatePickerProps {
  /** Initial date. Defaults to today. */
  value?: Date;
  minYear?: number;
  maxYear?: number;
  /** Fires with a Date whenever any wheel settles. */
  onChange?: (date: Date) => void;
  className?: string;
  style?: React.CSSProperties;
}
export function DatePicker(props: DatePickerProps): JSX.Element;
export default DatePicker;
