import React from 'react';
/* TecAce — TextButton (Button/Text): borderless text-only action. */
const SIZES = { sm: { font: 13, lh: 1.385 }, md: { font: 14, lh: 1.429 }, lg: { font: 16, lh: 1.5 } };
export function TextButton({ label = '텍스트', size = 'md', color = 'primary', disable = false, underline = false, leadingIcon = null, trailingIcon = null, onClick, className, style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const c = disable ? 'var(--label-disable, rgba(55,56,60,0.16))' : color === 'assistive' ? 'var(--label-alternative, rgba(55,56,60,0.61))' : color === 'neutral' ? 'var(--label-normal)' : 'var(--primary-normal)';
  const box = (n) => <span style={{ display: 'inline-flex', width: s.font + 4, height: s.font + 4, alignItems: 'center', justifyContent: 'center' }}>{n}</span>;
  return (
    <button type="button" disabled={disable} onClick={disable ? undefined : onClick} className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, border: 'none', background: 'transparent',
        padding: 0, cursor: disable ? 'default' : 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 600,
        fontSize: s.font, lineHeight: s.lh, color: c, textDecoration: underline ? 'underline' : 'none', textUnderlineOffset: 2, outline: 'none', ...style }} {...rest}>
      {leadingIcon && box(leadingIcon)}<span>{label}</span>{trailingIcon && box(trailingIcon)}
    </button>
  );
}
export default TextButton;
