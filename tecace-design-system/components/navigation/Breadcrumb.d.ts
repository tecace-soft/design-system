import * as React from 'react';
export interface BreadcrumbItem { label: string; value?: string; }
export interface BreadcrumbProps { items?: (string | BreadcrumbItem)[]; onNavigate?: (value: string, index: number) => void; className?: string; style?: React.CSSProperties; }
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
