import React from 'react';
import { Spinner } from '../feedback/Spinner.jsx';

/* TecAce — Button (Button/Button family: variant × color × size × iconOnly × disable).
   Exact geometry transcribed from Figma. */

const SIZES = {
  lg: { radius: 12, padY: 12, padX: 28, font: 16, lh: 1.5, ls: '0.006em', gap: 6, icon: 20, iconPad: 12 },
  md: { radius: 10, padY: 9,  padX: 20, font: 15, lh: 1.467, ls: '0.010em', gap: 5, icon: 18, iconPad: 10 },
  sm: { radius: 8,  padY: 7,  padX: 14, font: 13, lh: 1.385, ls: '0.019em', gap: 4, icon: 16, iconPad: 7 },
};

export function Button({
  label = '텍스트',
  variant = 'solid',      // 'solid' | 'outlined'
  color = 'primary',      // 'primary' | 'assistive'
  size = 'md',            // 'sm' | 'md' | 'lg'
  iconOnly = false,
  disable = false,
  loading = false,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: s.gap, borderRadius: s.radius, border: 'none', cursor: disable ? 'default' : 'pointer',
    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: s.font, lineHeight: s.lh, letterSpacing: s.ls,
    padding: iconOnly ? s.iconPad : `${s.padY}px ${s.padX}px`, boxSizing: 'border-box',
    transition: 'filter .15s ease, background-color .15s ease', whiteSpace: 'nowrap',
    background: 'transparent', outline: 'none',
  };

  let skin;
  if (disable) {
    skin = variant === 'outlined'
      ? { background: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.16)', color: 'rgba(55,56,60,0.16)' }
      : { background: 'var(--interaction-disable)', color: 'rgba(55,56,60,0.28)' };
  } else if (variant === 'outlined') {
    skin = { background: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.16)',
             color: color === 'assistive' ? 'var(--label-normal)' : 'var(--primary-normal)' };
  } else if (color === 'assistive') {
    skin = { background: 'rgba(112,115,124,0.08)', backdropFilter: 'blur(64px)', color: 'rgba(46,47,51,0.88)', fontWeight: 500 };
  } else {
    skin = { background: 'var(--primary-normal)', color: 'var(--static-white,#fff)' };
  }

  const iconBox = (node) => (
    <span style={{ display: 'inline-flex', width: s.icon, height: s.icon, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{node}</span>
  );

  return (
    <button type="button" onClick={disable ? undefined : onClick} disabled={disable}
      className={className} style={{ ...base, ...skin, ...style }} {...rest}>
      {loading && iconBox(<Spinner size={s.icon - 2} />)}
      {!loading && leadingIcon && iconBox(leadingIcon)}
      {!iconOnly && !loading && <span>{label}</span>}
      {iconOnly && !loading && !leadingIcon && iconBox(trailingIcon)}
      {!loading && trailingIcon && !iconOnly && iconBox(trailingIcon)}
    </button>
  );
}

export default Button;
