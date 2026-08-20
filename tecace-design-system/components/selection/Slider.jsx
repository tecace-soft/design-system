import React from 'react';
/* TecAce — Slider: single-value track with primary fill + thumb. */
export function Slider({ value=0, min=0, max=100, step=1, disable=false, onChange, className, style }) {
  const ref = React.useRef(null);
  const pct = ((value - min) / (max - min)) * 100;
  const set = (clientX) => {
    if (!ref.current || disable) return;
    const r = ref.current.getBoundingClientRect();
    let p = (clientX - r.left) / r.width; p = Math.max(0, Math.min(1, p));
    let v = min + p * (max - min); v = Math.round(v / step) * step;
    onChange && onChange(Math.max(min, Math.min(max, v)));
  };
  const drag = (e) => { set(e.clientX); const mv=(ev)=>set(ev.clientX); const up=()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);}; document.addEventListener('mousemove',mv); document.addEventListener('mouseup',up); };
  return (
    <div ref={ref} className={className} onMouseDown={drag} style={{ position:'relative', height:24, display:'flex', alignItems:'center', cursor:disable?'default':'pointer', opacity:disable?0.5:1, ...style }}>
      <div style={{ height:6, width:'100%', borderRadius:100, background:'var(--fill-strong, rgba(112,115,124,0.16))' }} />
      <div style={{ position:'absolute', left:0, height:6, width:pct+'%', borderRadius:100, background:'var(--primary-normal)' }} />
      <div style={{ position:'absolute', left:pct+'%', width:20, height:20, marginLeft:-10, borderRadius:1000, background:'#fff', boxShadow:'0 1px 4px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(112,115,124,0.10)' }} />
    </div>
  );
}
export default Slider;
