import React from 'react';

/* TecAce — Tab (Tab/Tab): horizontal tab bar with active underline indicator. */
export function Tab({ items = [], value, onChange, size = 'md', className, style }) {
  const font = size === 'lg' ? 17 : size === 'sm' ? 14 : 16;
  const active = value ?? (items[0] && (items[0].value ?? items[0].label));
  return (
    <div className={className} role="tablist" style={{ display: 'flex', alignItems: 'stretch', gap: 4,
      boxShadow: 'inset 0 -1px 0 var(--line-normal, rgba(112,115,124,0.16))', fontFamily: 'var(--font-sans)', ...style }}>
      {items.map((it, i) => {
        const v = it.value ?? it.label ?? i;
        const isActive = v === active;
        return (
          <button key={i} role="tab" aria-selected={isActive} onClick={() => onChange && onChange(v)}
            style={{ position: 'relative', border: 'none', background: 'transparent', cursor: 'pointer',
              padding: '12px 16px', fontFamily: 'var(--font-sans)', fontWeight: isActive ? 600 : 500, fontSize: font, lineHeight: 1.5,
              color: isActive ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)', outline: 'none', transition: 'color .15s ease' }}>
            {it.label}
            {isActive && <span style={{ position: 'absolute', left: 8, right: 8, bottom: -1, height: 2, borderRadius: 2, background: 'var(--label-normal, rgb(23,23,25))' }} />}
          </button>
        );
      })}
    </div>
  );
}

export default Tab;
