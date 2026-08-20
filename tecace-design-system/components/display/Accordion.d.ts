import * as React from 'react';
export interface AccordionItem { title: React.ReactNode; content: React.ReactNode; }
export interface AccordionProps { items?: AccordionItem[]; multiple?: boolean; className?: string; style?: React.CSSProperties; }
export declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
