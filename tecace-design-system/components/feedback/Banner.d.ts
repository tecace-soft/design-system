import * as React from 'react';
export interface BannerProps { title?: string; message?: string; color?: "info"|"positive"|"negative"|"cautionary"; icon?: React.ReactNode; onClose?: () => void; className?: string; style?: React.CSSProperties; }
export declare const Banner: React.FC<BannerProps>;
export default Banner;
