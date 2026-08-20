import React from 'react';
/* TecAce — BottomSheet: mobile sheet anchored to the bottom with grabber. */
export function BottomSheet({ open=true, title, onClose, children, className, style }) {
  if (!open) return null;
  return (
    <div style={{ position:'absolute', inset:0, zIndex:900, display:'flex', flexDirection:'column', justifyContent:'flex-end', background:'rgba(23,23,25,0.48)', fontFamily:'var(--font-sans)' }} onClick={onClose}>
      <div className={className} role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}
        style={{ background:'var(--background-elevated-normal,#fff)', borderRadius:'24px 24px 0 0', padding:'8px 20px 24px', maxHeight:'80%', overflowY:'auto', boxShadow:'0 -8px 30px rgba(23,23,25,0.18)', ...style }}>
        <div style={{ width:40, height:4, borderRadius:100, background:'var(--fill-strong, rgba(112,115,124,0.16))', margin:'6px auto 14px' }} />
        {title && <div style={{ fontSize:18, fontWeight:600, lineHeight:1.445, color:'var(--label-normal)', marginBottom:12 }}>{title}</div>}
        {children}
      </div>
    </div>
  );
}
export default BottomSheet;
