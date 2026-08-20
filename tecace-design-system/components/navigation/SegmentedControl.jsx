import React from 'react';
/* TecAce — SegmentedControl: inset track with sliding selected pill. */
export function SegmentedControl({ items = [], value, onChange, size = 'md', className, style }) {
  const norm = items.map(i => typeof i === 'string' ? { label: i, value: i } : i);
  const idx = Math.max(0, norm.findIndex(o => o.value === (value ?? norm[0]?.value)));
  const pad = size === 'sm' ? 3 : 4;
  const h = size === 'sm' ? 32 : 40;
  const font = size === 'sm' ? 13 : 14;
  return (
    <div className={className} style={{ position: 'relative', display: 'inline-flex', padding: pad, borderRadius: 12,
      background: 'var(--fill-normal, rgba(112,115,124,0.08))', height: h, boxSizing: 'border-box', fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ position: 'absolute', top: pad, bottom: pad, left: pad, width: `calc((100% - ${pad * 2}px) / ${norm.length})`,
        transform: `translateX(${idx * 100}%)`, transition: 'transform .2s ease', background: 'var(--background-normal-normal,#fff)',
        borderRadius: 9, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }} />
      {norm.map((o, i) => {
        const on = i === idx;
        return (
          <button key={i} type="button" onClick={() => onChange && onChange(o.value)}
            style={{ position: 'relative', flex: 1, border: 'none', background: 'transparent', cursor: 'pointer', padding: '0 16px',
              fontFamily: 'var(--font-sans)', fontWeight: on ? 600 : 500, fontSize: font, whiteSpace: 'nowrap',
              color: on ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)', transition: 'color .15s ease', outline: 'none' }}>{o.label}</button>
        );
      })}
    </div>
  );
}
export default SegmentedControl;
