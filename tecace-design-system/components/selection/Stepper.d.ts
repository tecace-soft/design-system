import * as React from 'react';
export interface StepperProps { value?: number; min?: number; max?: number; step?: number; disable?: boolean; onChange?: (value: number) => void; className?: string; style?: React.CSSProperties; }
export declare const Stepper: React.FC<StepperProps>;
export default Stepper;
