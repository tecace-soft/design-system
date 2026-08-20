import * as React from 'react';
export interface EmptyStateProps { icon?: React.ReactNode; title?: string; description?: string; actionLabel?: string; onAction?: () => void; className?: string; style?: React.CSSProperties; }
export declare const EmptyState: React.FC<EmptyStateProps>;
export default EmptyState;
