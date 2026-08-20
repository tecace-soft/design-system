import React from 'react';
/* TecAce — Pagination / Page Indicator: dots (carousel) or numeric pager. */
export function Pagination({ total = 1, current = 0, variant = 'dots', onChange, className, style }) {
  if (variant === 'dots') {
    return (
      <div className={className} style={{ display: 'inline-flex', gap: 6, alignItems: 'center', ...style }}>
        {Array.from({ length: total }).map((_, i) => {
          const on = i === current;
          return <span key={i} onClick={() => onChange && onChange(i)} style={{ width: on ? 18 : 6, height: 6, borderRadius: 100,
            background: on ? 'var(--primary-normal)' : 'var(--fill-strong, rgba(112,115,124,0.16))', cursor: 'pointer', transition: 'width .2s ease, background .2s ease' }} />;
        })}
      </div>
    );
  }
  const go = (n) => n >= 0 && n < total && onChange && onChange(n);
  const arrow = (d, off) => (
    <button type="button" disabled={off} onClick={() => go(current + d)} aria-label={d < 0 ? '이전' : '다음'}
      style={{ width: 36, height: 36, borderRadius: 8, border: 'none', background: 'transparent', cursor: off ? 'default' : 'pointer',
        color: off ? 'var(--label-disable, rgba(55,56,60,0.28))' : 'var(--label-normal)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', outline: 'none' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={d < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-sans)', ...style }}>
      {arrow(-1, current <= 0)}
      {Array.from({ length: total }).map((_, i) => {
        const on = i === current;
        return <button key={i} type="button" onClick={() => go(i)} style={{ minWidth: 36, height: 36, borderRadius: 8, border: 'none',
          background: on ? 'var(--primary-normal)' : 'transparent', color: on ? 'var(--static-white,#fff)' : 'var(--label-neutral, rgba(46,47,51,0.88))',
          fontFamily: 'var(--font-sans)', fontWeight: on ? 600 : 500, fontSize: 14, cursor: 'pointer', outline: 'none' }}>{i + 1}</button>;
      })}
      {arrow(1, current >= total - 1)}
    </div>
  );
}
export default Pagination;
