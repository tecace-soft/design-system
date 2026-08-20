import React from 'react';

/* TecAce — Category (Category/Category): scrollable row of selectable filter chips. */
const SIZES = { sm: { font: 13, padX: 12, padY: 7 }, md: { font: 14, padX: 14, padY: 8 }, lg: { font: 15, padX: 16, padY: 10 } };

export function Category({ items = [], value, onChange, size = 'md', className, style }) {
  const s = SIZES[size] || SIZES.md;
  const active = value ?? (items[0] && (items[0].value ?? items[0].label ?? items[0]));
  return (
    <div className={className} style={{ display: 'flex', gap: 8, overflowX: 'auto', fontFamily: 'var(--font-sans)',
      scrollbarWidth: 'none', ...style }}>
      {items.map((it, i) => {
        const label = it.label ?? it;
        const v = it.value ?? label;
        const isActive = v === active;
        return (
          <button key={i} onClick={() => onChange && onChange(v)} style={{ flexShrink: 0, border: 'none', cursor: 'pointer',
            borderRadius: 1000, padding: `${s.padY}px ${s.padX}px`, fontFamily: 'var(--font-sans)', fontWeight: isActive ? 600 : 500,
            fontSize: s.font, lineHeight: 1.4, whiteSpace: 'nowrap', transition: 'background-color .15s ease', outline: 'none',
            background: isActive ? 'var(--label-normal, rgb(23,23,25))' : 'var(--fill-normal, rgba(112,115,124,0.08))',
            color: isActive ? 'var(--static-white,#fff)' : 'var(--label-neutral, rgba(46,47,51,0.88))' }}>{label}</button>
        );
      })}
    </div>
  );
}

export default Category;
