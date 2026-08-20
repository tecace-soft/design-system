import React from 'react';

/* TecAce — Content Badge (Content Badge/Content Badge): inline status/label pill.
   Variant (weak fill / solid) × Size × semantic Color. */

const SIZES = { sm: { font: 11, padX: 6, padY: 2, radius: 4 }, md: { font: 12, padX: 8, padY: 3, radius: 5 }, lg: { font: 13, padX: 10, padY: 4, radius: 6 } };

const COLORS = {
  primary:  { fg: 'var(--primary-normal)',            bg: 'var(--accent-background-blue, rgb(238,246,255))' },
  neutral:  { fg: 'var(--label-neutral, rgba(46,47,51,0.88))', bg: 'var(--fill-normal, rgba(112,115,124,0.08))' },
  positive: { fg: 'var(--status-positive, rgb(10,190,92))', bg: 'rgba(10,190,92,0.10)' },
  negative: { fg: 'var(--status-negative, rgb(232,48,52))', bg: 'rgba(232,48,52,0.10)' },
  cautionary:{ fg: 'var(--status-cautionary, rgb(255,153,10))', bg: 'rgba(255,153,10,0.12)' },
};

export function ContentBadge({ label = '텍스트', size = 'md', color = 'primary', variant = 'weak', className, style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const c = COLORS[color] || COLORS.primary;
  const solid = variant === 'solid';
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', borderRadius: s.radius,
      padding: `${s.padY}px ${s.padX}px`, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: s.font, lineHeight: 1.334,
      background: solid ? c.fg : c.bg, color: solid ? '#fff' : c.fg, whiteSpace: 'nowrap', ...style }} {...rest}>{label}</span>
  );
}

export default ContentBadge;
