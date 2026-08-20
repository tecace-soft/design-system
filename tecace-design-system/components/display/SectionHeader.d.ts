import * as React from 'react';
export interface SectionHeaderProps { title?: React.ReactNode; description?: React.ReactNode; actionLabel?: string; onAction?: () => void; className?: string; style?: React.CSSProperties; }
export declare const SectionHeader: React.FC<SectionHeaderProps>;
export default SectionHeader;
