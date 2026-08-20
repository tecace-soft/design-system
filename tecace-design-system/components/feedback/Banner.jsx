import React from 'react';
/* TecAce — Banner: inline info/status callout (weak-fill), semantic colors. */
const C = {
  info:{fg:'var(--primary-normal)',bg:'var(--blue-95,rgb(238,246,255))'},
  positive:{fg:'var(--status-positive,rgb(10,190,92))',bg:'rgba(10,190,92,0.10)'},
  negative:{fg:'var(--status-negative,rgb(232,48,52))',bg:'rgba(232,48,52,0.10)'},
  cautionary:{fg:'var(--status-cautionary,rgb(225,138,15))',bg:'rgba(225,138,15,0.12)'},
};
export function Banner({ title, message, color='info', icon=null, onClose, className, style }) {
  const c = C[color]||C.info;
  return (
    <div className={className} role="status" style={{ display:'flex', gap:10, padding:'12px 14px', borderRadius:12, background:c.bg, fontFamily:'var(--font-sans)', ...style }}>
      {icon && <span style={{ display:'inline-flex', width:20, height:20, color:c.fg, flexShrink:0, marginTop:1 }}>{icon}</span>}
      <div style={{ flex:1, minWidth:0 }}>
        {title && <div style={{ fontSize:14, fontWeight:600, lineHeight:1.429, color:'var(--label-normal)' }}>{title}</div>}
        {message && <div style={{ fontSize:14, fontWeight:500, lineHeight:1.5, color:'var(--label-neutral, rgba(46,47,51,0.88))', marginTop:title?2:0 }}>{message}</div>}
      </div>
      {onClose && <button type="button" onClick={onClose} aria-label="닫기" style={{ border:'none', background:'transparent', cursor:'pointer', color:'var(--label-alternative,#8a8d94)', padding:0, width:18, height:18, flexShrink:0 }}>
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></button>}
    </div>
  );
}
export default Banner;
