import React from 'react';
/* TecAce — SearchField: pill search input with leading icon and clear. */
export function SearchField({ value, defaultValue, placeholder = '검색', onChange, onClear, className, style, ...rest }) {
  const [inner, setInner] = React.useState(defaultValue || '');
  const val = value != null ? value : inner;
  const set = (v) => { if (value == null) setInner(v); };
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 8, height: 44, padding: '0 14px',
      borderRadius: 1000, background: 'var(--fill-normal, rgba(112,115,124,0.08))', fontFamily: 'var(--font-sans)', ...style }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--label-alternative,#8a8d94)', flexShrink: 0 }}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      <input value={val} placeholder={placeholder} onChange={e => { set(e.target.value); onChange && onChange(e); }}
        style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.467, color: 'var(--label-normal)', minWidth: 0 }} {...rest} />
      {val && <button type="button" onClick={() => { set(''); onClear && onClear(); }} aria-label="지우기"
        style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer', color: 'var(--label-alternative,#8a8d94)', display: 'inline-flex', width: 18, height: 18, flexShrink: 0 }}>
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="var(--fill-normal,#f0f0f0)" strokeWidth="2" strokeLinecap="round"/></svg></button>}
    </div>
  );
}
export default SearchField;
