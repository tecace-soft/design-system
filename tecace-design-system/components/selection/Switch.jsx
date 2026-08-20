import React from 'react';

/* TecAce — Switch (Control/Switch). 52×32 track, 24 thumb, radius 100. */
const SIZES = { md: { w: 52, h: 32, thumb: 24, pad: 4 }, sm: { w: 40, h: 24, thumb: 18, pad: 3 } };

export function Switch({ active = false, disable = false, size = 'md', onChange, className, style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const travel = s.w - s.thumb - s.pad * 2;
  const trackBg = disable ? 'rgba(112,115,124,0.08)' : active ? 'var(--primary-normal)' : 'rgba(112,115,124,0.16)';
  return (
    <button type="button" role="switch" aria-checked={active} disabled={disable}
      onClick={disable ? undefined : () => onChange && onChange(!active)} className={className}
      style={{ position: 'relative', width: s.w, height: s.h, borderRadius: 100, border: 'none', padding: s.pad,
        background: trackBg, cursor: disable ? 'default' : 'pointer', transition: 'background-color .2s ease',
        display: 'inline-flex', alignItems: 'center', flexShrink: 0, opacity: disable ? 0.6 : 1, outline: 'none', ...style }} {...rest}>
      <span style={{ position: 'absolute', top: s.pad, left: s.pad, width: s.thumb, height: s.thumb, borderRadius: 1000,
        background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.16)', transition: 'transform .2s ease',
        transform: active ? `translateX(${travel}px)` : 'translateX(0)' }} />
    </button>
  );
}

export default Switch;
