import * as React from 'react';
export interface BottomSheetProps { open?: boolean; title?: React.ReactNode; onClose?: () => void; children?: React.ReactNode; className?: string; style?: React.CSSProperties; }
export declare const BottomSheet: React.FC<BottomSheetProps>;
export default BottomSheet;
