import React from 'react';

/* TecAce — Radio (Control/Radio). */
const SIZES = { md: 24, sm: 20 };

export function Radio({ checked = false, disable = false, size = 'md', label, name, value, onChange, className, style, ...rest }) {
  const box = SIZES[size] || SIZES.md;
  const ring = disable
    ? 'inset 0 0 0 1.5px rgba(112,115,124,0.22)'
    : checked ? 'none' : 'inset 0 0 0 1.5px var(--line-strong, rgba(112,115,124,0.52))';
  return (
    <label className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disable ? 'default' : 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15,
      lineHeight: 1.467, color: disable ? 'rgba(55,56,60,0.28)' : 'var(--label-normal)', ...style }}>
      <span onClick={disable ? undefined : () => onChange && onChange(value ?? true)}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: box, height: box,
          borderRadius: 1000, background: checked && !disable ? 'var(--primary-normal)' : 'transparent',
          boxShadow: ring, flexShrink: 0, transition: 'background-color .15s ease' }} {...rest}>
        {checked && <span style={{ width: box * 0.42, height: box * 0.42, borderRadius: 1000, background: disable ? 'rgba(55,56,60,0.28)' : '#fff' }} />}
      </span>
      {label != null && <span>{label}</span>}
    </label>
  );
}

export default Radio;
