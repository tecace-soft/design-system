import React from 'react';

/* TecAce — Checkbox (Control/Checkbox). Box + optional label. */
const SIZES = { md: 24, sm: 20 };

export function Checkbox({
  checked = false,
  indeterminate = false,
  disable = false,
  size = 'md',
  label,
  onChange,
  className,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.md;
  const on = checked || indeterminate;
  const fill = disable
    ? 'var(--fill-normal, rgba(112,115,124,0.08))'
    : on ? 'var(--primary-normal)' : 'transparent';
  const border = on || disable ? 'none' : 'inset 0 0 0 1.5px var(--line-strong, rgba(112,115,124,0.52))';
  return (
    <label className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disable ? 'default' : 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15,
      lineHeight: 1.467, color: disable ? 'rgba(55,56,60,0.28)' : 'var(--label-normal)', ...style }}>
      <span onClick={disable ? undefined : () => onChange && onChange(!checked)}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: box, height: box,
          borderRadius: 6, background: fill, boxShadow: border, flexShrink: 0, transition: 'background-color .15s ease' }} {...rest}>
        {indeterminate ? (
          <svg width={box * 0.6} height={box * 0.6} viewBox="0 0 16 16" fill="none"><path d="M3 8h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
        ) : on ? (
          <svg width={box * 0.7} height={box * 0.7} viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-6.5" stroke={disable ? 'rgba(55,56,60,0.28)' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        ) : null}
      </span>
      {label != null && <span>{label}</span>}
    </label>
  );
}

export default Checkbox;
