import * as React from 'react';
export interface MenuItem { label?: string; value?: string; icon?: React.ReactNode; danger?: boolean; disable?: boolean; divider?: boolean; onClick?: () => void; }
export interface MenuProps { items?: MenuItem[]; onSelect?: (value: string) => void; className?: string; style?: React.CSSProperties; }
export declare const Menu: React.FC<MenuProps>;
export default Menu;
