import React from 'react';
/* TecAce — Breadcrumb: path trail with chevron separators. */
export function Breadcrumb({ items=[], onNavigate, className, style }) {
  return (
    <nav className={className} aria-label="breadcrumb" style={{ display:'flex', alignItems:'center', gap:4, flexWrap:'wrap', fontFamily:'var(--font-sans)', ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const label = typeof it === 'string' ? it : it.label;
        return (
          <React.Fragment key={i}>
            <button type="button" disabled={last} onClick={() => !last && onNavigate && onNavigate(it.value ?? label, i)}
              style={{ border:'none', background:'transparent', padding:'2px 4px', cursor:last?'default':'pointer', fontFamily:'var(--font-sans)',
                fontWeight: last?600:500, fontSize:14, lineHeight:1.429, color: last ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)', outline:'none' }}>{label}</button>
            {!last && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color:'var(--label-disable, rgba(55,56,60,0.28))' }}><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
export default Breadcrumb;
