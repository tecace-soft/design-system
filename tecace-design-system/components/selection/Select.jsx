import React from 'react';
/* TecAce — Select / Dropdown (Auto Complete family): trigger + popover list. */
export function Select({ options = [], value, placeholder = '선택', label, disable = false, onChange, className, style }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, []);
  const norm = options.map(o => typeof o === 'string' ? { label: o, value: o } : o);
  const sel = norm.find(o => o.value === value);
  return (
    <div ref={ref} className={className} style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-sans)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.429, color: 'var(--label-normal)' }}>{label}</span>}
      <button type="button" disabled={disable} onClick={() => setOpen(o => !o)}
        style={{ display: 'flex', alignItems: 'center', gap: 8, height: 48, padding: '0 16px', borderRadius: 12, border: 'none',
          boxShadow: open ? 'inset 0 0 0 1.5px var(--primary-normal)' : 'inset 0 0 0 1px rgba(112,115,124,0.16)',
          background: disable ? 'var(--fill-alternative, rgba(112,115,124,0.05))' : 'var(--background-normal-normal,#fff)',
          cursor: disable ? 'default' : 'pointer', fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.5,
          color: sel ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)', minWidth: 160, outline: 'none' }}>
        <span style={{ flex: 1, textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sel ? sel.label : placeholder}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .15s ease', color: 'var(--label-alternative,#8a8d94)' }}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, zIndex: 20, background: 'var(--background-elevated-normal,#fff)',
          borderRadius: 12, boxShadow: '0 6px 20px rgba(23,23,25,0.14), inset 0 0 0 1px rgba(112,115,124,0.10)', padding: 6, maxHeight: 240, overflowY: 'auto' }}>
          {norm.map((o, i) => {
            const on = o.value === value;
            return (
              <div key={i} onClick={() => { onChange && onChange(o.value); setOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 8, cursor: 'pointer',
                  fontSize: 15, lineHeight: 1.467, fontWeight: on ? 600 : 500, color: on ? 'var(--primary-normal)' : 'var(--label-normal)',
                  background: on ? 'var(--fill-normal, rgba(112,115,124,0.08))' : 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--fill-normal, rgba(112,115,124,0.08))'}
                onMouseLeave={e => e.currentTarget.style.background = on ? 'var(--fill-normal, rgba(112,115,124,0.08))' : 'transparent'}>
                <span style={{ flex: 1 }}>{o.label}</span>
                {on && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Select;
