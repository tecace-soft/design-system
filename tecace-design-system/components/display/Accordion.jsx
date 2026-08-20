import React from 'react';
/* TecAce — Accordion: expand/collapse disclosure rows. */
export function Accordion({ items=[], multiple=false, className, style }) {
  const [open, setOpen] = React.useState({});
  const toggle = (i) => setOpen(o => multiple ? { ...o, [i]: !o[i] } : { [i]: !o[i] });
  return (
    <div className={className} style={{ fontFamily:'var(--font-sans)', ...style }}>
      {items.map((it, i) => {
        const on = !!open[i];
        return (
          <div key={i} style={{ boxShadow:'inset 0 -1px 0 var(--line-normal, rgba(112,115,124,0.12))' }}>
            <button type="button" onClick={() => toggle(i)} style={{ display:'flex', alignItems:'center', gap:12, width:'100%', border:'none', background:'transparent', cursor:'pointer', padding:'16px 4px', textAlign:'left', outline:'none' }}>
              <span style={{ flex:1, fontSize:16, fontWeight:600, lineHeight:1.5, color:'var(--label-normal)' }}>{it.title}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ transform:on?'rotate(180deg)':'none', transition:'transform .2s ease', color:'var(--label-alternative,#8a8d94)' }}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {on && <div style={{ padding:'0 4px 16px', fontSize:15, fontWeight:500, lineHeight:1.6, color:'var(--label-neutral, rgba(46,47,51,0.88))' }}>{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
export default Accordion;
