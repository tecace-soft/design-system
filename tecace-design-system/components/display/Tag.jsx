import React from 'react';
/* TecAce — Tag: labelled token, optional removable, optional leading dot. */
export function Tag({ label='텍스트', dotColor, onRemove, className, style }) {
  return (
    <span className={className} style={{ display:'inline-flex', alignItems:'center', gap:6, height:28, padding:'0 10px', borderRadius:8, background:'var(--fill-normal, rgba(112,115,124,0.08))', fontFamily:'var(--font-sans)', fontWeight:500, fontSize:13, lineHeight:1.385, color:'var(--label-normal)', ...style }}>
      {dotColor && <span style={{ width:8, height:8, borderRadius:1000, background:dotColor, flexShrink:0 }} />}
      <span>{label}</span>
      {onRemove && <button type="button" onClick={onRemove} aria-label="삭제" style={{ border:'none', background:'transparent', cursor:'pointer', padding:0, width:14, height:14, color:'var(--label-alternative,#8a8d94)', display:'inline-flex', flexShrink:0 }}>
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></button>}
    </span>
  );
}
export default Tag;
