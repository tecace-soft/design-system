import React from 'react';
/* TecAce — ProgressBar: linear determinate/indeterminate track. */
export function ProgressBar({ value = 0, indeterminate = false, height = 6, color = 'var(--primary-normal)', className, style }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={className} role="progressbar" style={{ width: '100%', height, borderRadius: 100, overflow: 'hidden',
      background: 'var(--fill-normal, rgba(112,115,124,0.08))', position: 'relative', ...style }}>
      {indeterminate ? (
        <div style={{ position: 'absolute', top: 0, bottom: 0, width: '40%', borderRadius: 100, background: color, animation: 'ta-prog 1.2s ease-in-out infinite' }} />
      ) : (
        <div style={{ height: '100%', width: pct + '%', borderRadius: 100, background: color, transition: 'width .3s ease' }} />
      )}
      <style>{'@keyframes ta-prog{0%{left:-40%}100%{left:100%}}'}</style>
    </div>
  );
}
export default ProgressBar;
