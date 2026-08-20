import * as React from 'react';
export interface ModalProps { open?: boolean; title?: React.ReactNode; onClose?: () => void; footer?: React.ReactNode; width?: number | string; children?: React.ReactNode; className?: string; style?: React.CSSProperties; }
export declare const Modal: React.FC<ModalProps>;
export default Modal;
