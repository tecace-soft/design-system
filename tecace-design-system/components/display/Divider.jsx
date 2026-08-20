import React from 'react';

/* TecAce — Divider (Basic/Divider). Horizontal or vertical hairline. */
export function Divider({ vertical = false, thickness = 1, inset = 0, className, style }) {
  const line = 'var(--line-normal, rgba(112,115,124,0.16))';
  return vertical ? (
    <span className={className} style={{ display: 'inline-block', width: thickness, alignSelf: 'stretch',
      background: line, margin: `${inset}px 0`, ...style }} />
  ) : (
    <div className={className} style={{ height: thickness, width: '100%', background: line, margin: `0 ${inset}px`, ...style }} />
  );
}

export default Divider;
