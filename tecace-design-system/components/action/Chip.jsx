import React from 'react';

/* TecAce — Chip (Chip/Chip: Size × Variant × Active × Disable). Pill-shaped. */

const SIZES = {
  xs: { font: 12, lh: 1.334, ls: '0.025em', padX: 8,  padY: 4, gap: 2, icon: 14 },
  sm: { font: 13, lh: 1.385, ls: '0.019em', padX: 10, padY: 6, gap: 4, icon: 16 },
  md: { font: 14, lh: 1.429, ls: '0.014em', padX: 12, padY: 7, gap: 4, icon: 18 },
  lg: { font: 15, lh: 1.467, ls: '0.010em', padX: 14, padY: 9, gap: 6, icon: 20 },
};

export function Chip({
  label = '텍스트',
  size = 'md',
  variant = 'normal',   // 'normal' | 'alternative'
  active = false,
  disable = false,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  let skin;
  if (disable) skin = { background: 'var(--fill-alternative, rgba(112,115,124,0.05))', color: 'rgba(55,56,60,0.28)', boxShadow: 'none' };
  else if (active) skin = { background: 'var(--primary-normal)', color: 'var(--static-white,#fff)', boxShadow: 'none' };
  else if (variant === 'alternative') skin = { background: 'var(--fill-normal, rgba(112,115,124,0.08))', color: 'var(--label-normal)', boxShadow: 'none' };
  else skin = { background: 'transparent', color: 'var(--label-normal)', boxShadow: 'inset 0 0 0 1px var(--line-normal, rgba(112,115,124,0.22))' };

  const iconBox = (node) => (<span style={{ display: 'inline-flex', width: s.icon, height: s.icon, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{node}</span>);

  return (
    <button type="button" disabled={disable} onClick={disable ? undefined : onClick} className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, borderRadius: 1000, border: 'none',
        padding: `${s.padY}px ${s.padX}px`, cursor: disable ? 'default' : 'pointer', fontFamily: 'var(--font-sans)',
        fontWeight: 500, fontSize: s.font, lineHeight: s.lh, letterSpacing: s.ls, whiteSpace: 'nowrap',
        transition: 'background-color .15s ease', outline: 'none', ...skin, ...style }} {...rest}>
      {leadingIcon && iconBox(leadingIcon)}
      <span>{label}</span>
      {trailingIcon && iconBox(trailingIcon)}
    </button>
  );
}

export default Chip;
