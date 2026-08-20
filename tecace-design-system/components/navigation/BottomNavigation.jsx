import React from 'react';

/* TecAce — Bottom Navigation (Bottom Navigation/Bottom Navigation): mobile tab bar. */
export function BottomNavigation({ items = [], value, onChange, className, style }) {
  const active = value ?? (items[0] && (items[0].value ?? items[0].label));
  return (
    <nav className={className} style={{ display: 'flex', alignItems: 'stretch', width: '100%',
      background: 'var(--background-normal-normal,#fff)', boxShadow: 'inset 0 1px 0 var(--line-normal, rgba(112,115,124,0.16))',
      padding: '8px 8px 12px', fontFamily: 'var(--font-sans)', ...style }}>
      {items.map((it, i) => {
        const v = it.value ?? it.label ?? i;
        const isActive = v === active;
        const color = isActive ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)';
        return (
          <button key={i} onClick={() => onChange && onChange(v)} style={{ flex: 1, border: 'none', background: 'transparent',
            cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '4px 0', outline: 'none' }}>
            <span style={{ display: 'inline-flex', width: 24, height: 24, alignItems: 'center', justifyContent: 'center', color }}>{it.icon}</span>
            <span style={{ fontSize: 11, fontWeight: isActive ? 600 : 500, lineHeight: 1.273, letterSpacing: '0.031em', color }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNavigation;
