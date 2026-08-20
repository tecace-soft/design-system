import React from 'react';

/* TecAce — Floating Action Button (Button/Floating Action Button). */
export function FloatingActionButton({ icon, label, disable = false, onClick, className, style, ...rest }) {
  const extended = !!label;
  return (
    <button type="button" disabled={disable} onClick={disable ? undefined : onClick} className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        height: 56, minWidth: 56, padding: extended ? '0 20px' : 0, borderRadius: extended ? 16 : 1000,
        border: 'none', cursor: disable ? 'default' : 'pointer',
        background: disable ? 'var(--interaction-disable)' : 'var(--primary-normal)',
        color: disable ? 'rgba(55,56,60,0.28)' : 'var(--static-white,#fff)',
        boxShadow: '0 4px 16px rgba(23,23,25,0.16)', fontFamily: 'var(--font-sans)', fontWeight: 600,
        fontSize: 16, lineHeight: 1.5, outline: 'none', ...style }} {...rest}>
      {icon && <span style={{ display: 'inline-flex', width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>{icon}</span>}
      {extended && <span>{label}</span>}
    </button>
  );
}

export default FloatingActionButton;
