import React from 'react';
/* TecAce — Modal: scrim + centered dialog shell. Compose your own content/footer. */
export function Modal({ open=true, title, onClose, footer=null, width=400, children, className, style }) {
  if (!open) return null;
  return (
    <div style={{ position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:20, background:'rgba(23,23,25,0.48)', backdropFilter:'blur(2px)', fontFamily:'var(--font-sans)' }} onClick={onClose}>
      <div className={className} role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}
        style={{ width, maxWidth:'100%', maxHeight:'86vh', display:'flex', flexDirection:'column', background:'var(--background-elevated-normal,#fff)', borderRadius:20, boxShadow:'0 12px 40px rgba(23,23,25,0.22)', ...style }}>
        {(title || onClose) && (
          <div style={{ display:'flex', alignItems:'center', gap:8, padding:'20px 20px 12px' }}>
            <span style={{ flex:1, fontSize:18, fontWeight:600, lineHeight:1.445, letterSpacing:'-0.002em', color:'var(--label-normal)' }}>{title}</span>
            {onClose && <button type="button" onClick={onClose} aria-label="닫기" style={{ border:'none', background:'transparent', cursor:'pointer', padding:0, width:24, height:24, color:'var(--label-alternative,#8a8d94)', flexShrink:0 }}>
              <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></button>}
          </div>
        )}
        <div style={{ padding:'0 20px 20px', overflowY:'auto', fontSize:15, lineHeight:1.6, color:'var(--label-neutral, rgba(46,47,51,0.88))' }}>{children}</div>
        {footer && <div style={{ display:'flex', gap:8, padding:'12px 20px 20px', boxShadow:'inset 0 1px 0 var(--line-normal, rgba(112,115,124,0.12))' }}>{footer}</div>}
      </div>
    </div>
  );
}
export default Modal;
