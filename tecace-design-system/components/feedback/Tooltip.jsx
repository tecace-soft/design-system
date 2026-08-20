import React from 'react';

/* TecAce — Tooltip (Bubble): small pointer label. Static presentation component. */
const ARROW = 6;
export function Tooltip({ label = '텍스트', placement = 'top', className, style }) {
  const bubble = (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', background: 'var(--label-normal, rgb(23,23,25))',
      color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 13, lineHeight: 1.385, letterSpacing: '0.019em',
      padding: '6px 10px', borderRadius: 8, whiteSpace: 'nowrap' }}>{label}</span>
  );
  const arrowStyle = {
    top:    { bottom: -ARROW + 1, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
    bottom: { top: -ARROW + 1, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
    left:   { right: -ARROW + 1, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
    right:  { left: -ARROW + 1, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
  }[placement];
  return (
    <span className={className} style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {bubble}
      <span style={{ position: 'absolute', width: ARROW * 2, height: ARROW * 2, background: 'var(--label-normal, rgb(23,23,25))', ...arrowStyle }} />
    </span>
  );
}

export default Tooltip;
