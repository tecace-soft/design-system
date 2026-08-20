import React from 'react';

/* TecAce — TextField (text input). radius 12, inset border, focus → primary border. */
export function TextField({
  value,
  defaultValue,
  placeholder = '',
  label,
  helper,
  error = false,
  disable = false,
  leadingIcon = null,
  trailingIcon = null,
  onChange,
  type = 'text',
  className,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const border = disable
    ? 'inset 0 0 0 1px rgba(112,115,124,0.08)'
    : error ? 'inset 0 0 0 1px var(--status-negative, rgb(232,48,52))'
      : focused ? 'inset 0 0 0 1.5px var(--primary-normal)'
        : 'inset 0 0 0 1px rgba(112,115,124,0.16)';
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-sans)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.429, color: 'var(--label-normal)' }}>{label}</span>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderRadius: 12, boxShadow: border,
        background: disable ? 'var(--fill-alternative, rgba(112,115,124,0.05))' : 'var(--background-normal-normal,#fff)',
        padding: '0 16px', height: 48, transition: 'box-shadow .15s ease' }}>
        {leadingIcon && <span style={{ display: 'inline-flex', width: 20, height: 20, color: 'var(--label-alternative, #8a8d94)', flexShrink: 0 }}>{leadingIcon}</span>}
        <input type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disable}
          onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)',
            fontSize: 16, lineHeight: 1.5, color: 'var(--label-normal)', minWidth: 0 }} {...rest} />
        {trailingIcon && <span style={{ display: 'inline-flex', width: 20, height: 20, color: 'var(--label-alternative, #8a8d94)', flexShrink: 0 }}>{trailingIcon}</span>}
      </div>
      {helper && <span style={{ fontSize: 13, lineHeight: 1.385, color: error ? 'var(--status-negative, rgb(232,48,52))' : 'var(--label-alternative, #8a8d94)' }}>{helper}</span>}
    </div>
  );
}

export default TextField;
