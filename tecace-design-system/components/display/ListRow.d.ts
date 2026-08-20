import * as React from 'react';
export interface ListRowProps { leading?: React.ReactNode; title?: React.ReactNode; description?: React.ReactNode; trailing?: React.ReactNode; onClick?: (e: React.MouseEvent) => void; divider?: boolean; className?: string; style?: React.CSSProperties; }
export declare const ListRow: React.FC<ListRowProps>;
export default ListRow;
