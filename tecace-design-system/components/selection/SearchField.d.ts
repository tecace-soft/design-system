import * as React from 'react';
export interface SearchFieldProps { value?: string; defaultValue?: string; placeholder?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; onClear?: () => void; className?: string; style?: React.CSSProperties; }
export declare const SearchField: React.FC<SearchFieldProps>;
export default SearchField;
