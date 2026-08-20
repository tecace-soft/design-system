import * as React from 'react';
export interface TextFieldProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  helper?: string;
  error?: boolean;
  disable?: boolean;
  type?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
