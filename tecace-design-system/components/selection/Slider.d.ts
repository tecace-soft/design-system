import * as React from 'react';
export interface SliderProps { value?: number; min?: number; max?: number; step?: number; disable?: boolean; onChange?: (value: number) => void; className?: string; style?: React.CSSProperties; }
export declare const Slider: React.FC<SliderProps>;
export default Slider;
