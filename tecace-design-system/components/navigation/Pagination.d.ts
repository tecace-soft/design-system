import * as React from 'react';
export interface PaginationProps { total?: number; current?: number; variant?: "dots" | "numeric"; onChange?: (index: number) => void; className?: string; style?: React.CSSProperties; }
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
