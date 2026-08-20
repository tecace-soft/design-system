import React from 'react';
/* TecAce — Stepper: numeric increment/decrement (Cell trailing value control). */
export function Stepper({ value = 0, min = 0, max = 99, step = 1, disable = false, onChange, className, style }) {
  const set = (v) => { const n = Math.max(min, Math.min(max, v)); if (n !== value) onChange && onChange(n); };
  const btn = (label, fn, off) => (
    <button type="button" disabled={disable || off} onClick={() => !off && fn()} aria-label={label}
      style={{ width: 32, height: 32, borderRadius: 8, border: 'none', background: 'var(--fill-normal, rgba(112,115,124,0.08))',
        color: (disable || off) ? 'var(--label-disable, rgba(55,56,60,0.28))' : 'var(--label-normal)', cursor: (disable || off) ? 'default' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, outline: 'none' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={label === '증가' ? 'M8 3v10M3 8h10' : 'M3 8h10'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    </button>
  );
  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', ...style }}>
      {btn('감소', () => set(value - step), value <= min)}
      <span style={{ minWidth: 24, textAlign: 'center', fontWeight: 600, fontSize: 16, color: 'var(--label-normal)' }}>{value}</span>
      {btn('증가', () => set(value + step), value >= max)}
    </div>
  );
}
export default Stepper;
