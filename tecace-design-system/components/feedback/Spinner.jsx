import React from 'react';

/* TecAce — Circular loading spinner (Circular/Circular). */
export function Spinner({ size = 20, color = 'currentColor', strokeWidth = 2, className, style }) {
  const s = typeof size === 'number' ? `${size}px` : size;
  return (
    <span
      className={className}
      role="progressbar"
      aria-label="Loading"
      style={{ display: 'inline-flex', width: s, height: s, color, ...style }}
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" style={{ animation: 'ta-spin 0.8s linear infinite' }}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth={strokeWidth} />
        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      </svg>
      <style>{`@keyframes ta-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}

export default Spinner;
