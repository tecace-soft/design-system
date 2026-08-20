import React from 'react';
/* TecAce — Menu: floating action list (popover). Render inside a positioned wrapper. */
export function Menu({ items=[], onSelect, className, style }) {
  return (
    <div className={className} role="menu" style={{ minWidth:180, background:'var(--background-elevated-normal,#fff)', borderRadius:12, padding:6,
      boxShadow:'0 6px 20px rgba(23,23,25,0.14), inset 0 0 0 1px rgba(112,115,124,0.10)', fontFamily:'var(--font-sans)', ...style }}>
      {items.map((it, i) => it.divider ? (
        <div key={i} style={{ height:1, background:'var(--line-normal, rgba(112,115,124,0.12))', margin:'6px 4px' }} />
      ) : (
        <button key={i} type="button" role="menuitem" disabled={it.disable} onClick={() => { if(!it.disable){ it.onClick && it.onClick(); onSelect && onSelect(it.value ?? it.label); } }}
          style={{ display:'flex', alignItems:'center', gap:10, width:'100%', border:'none', background:'transparent', textAlign:'left', cursor:it.disable?'default':'pointer',
            padding:'10px 12px', borderRadius:8, fontFamily:'var(--font-sans)', fontWeight:500, fontSize:15, lineHeight:1.467,
            color: it.disable ? 'var(--label-disable, rgba(55,56,60,0.28))' : it.danger ? 'var(--status-negative, rgb(232,48,52))' : 'var(--label-normal)', outline:'none' }}
          onMouseEnter={e=>!it.disable&&(e.currentTarget.style.background='var(--fill-normal, rgba(112,115,124,0.08))')}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
          {it.icon && <span style={{ display:'inline-flex', width:18, height:18, flexShrink:0 }}>{it.icon}</span>}
          <span style={{ flex:1 }}>{it.label}</span>
        </button>
      ))}
    </div>
  );
}
export default Menu;
