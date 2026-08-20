import React from 'react';

/* TecAce — IconButton (Button/Icon Button: Normal | Background | Outlined). */

const SIZES = { sm: { box: 32, icon: 20, radius: 8 }, md: { box: 40, icon: 22, radius: 10 }, lg: { box: 48, icon: 24, radius: 12 } };

export function IconButton({
  icon,
  variant = 'normal',   // 'normal' | 'background' | 'outlined'
  size = 'md',
  disable = false,
  'aria-label': ariaLabel = 'button',
  onClick,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: s.box, height: s.box, borderRadius: variant === 'background' ? 1000 : s.radius,
    border: 'none', background: 'transparent', cursor: disable ? 'default' : 'pointer',
    color: disable ? 'var(--label-disable, rgba(55,56,60,0.28))' : 'var(--label-normal)',
    transition: 'background-color .15s ease', padding: 0, outline: 'none',
  };
  const skin = variant === 'background'
    ? { background: 'var(--fill-normal, rgba(112,115,124,0.08))' }
    : variant === 'outlined'
      ? { boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.16)' }
      : {};
  return (
    <button type="button" aria-label={ariaLabel} disabled={disable} onClick={disable ? undefined : onClick}
      className={className} style={{ ...base, ...skin, ...style }} {...rest}>
      <span style={{ display: 'inline-flex', width: s.icon, height: s.icon, alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
    </button>
  );
}

export default IconButton;
