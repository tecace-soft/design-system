import React from 'react';
/* TecAce — Skeleton: shimmering placeholder (Card Skeleton=True state). */
export function Skeleton({ variant = 'line', width = '100%', height, radius, className, style }) {
  const h = height != null ? height : variant === 'circle' ? 40 : variant === 'title' ? 20 : 14;
  const w = variant === 'circle' ? h : width;
  const r = radius != null ? radius : variant === 'circle' ? 1000 : variant === 'rect' ? 12 : 6;
  return (
    <span className={className} style={{ display: 'inline-block', width: w, height: h, borderRadius: r,
      background: 'linear-gradient(90deg, rgba(112,115,124,0.08) 25%, rgba(112,115,124,0.16) 37%, rgba(112,115,124,0.08) 63%)',
      backgroundSize: '400% 100%', animation: 'ta-shimmer 1.4s ease infinite', ...style }}>
      <style>{'@keyframes ta-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}'}</style>
    </span>
  );
}
export default Skeleton;
