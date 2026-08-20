import React from 'react';

/* TecAce — Badge (Badge/Push): dot or count notification badge. */
export function Badge({ count, dot = false, max = 99, color = 'var(--status-negative, rgb(232,48,52))', className, style, children }) {
  if (children == null) {
    // standalone badge
    if (dot) return <span className={className} style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 1000, background: color, ...style }} />;
    const text = typeof count === 'number' && count > max ? `${max}+` : count;
    return (
      <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        minWidth: 18, height: 18, padding: '0 5px', borderRadius: 1000, background: color, color: '#fff',
        fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, lineHeight: 1, ...style }}>{text}</span>
    );
  }
  // wrapper: anchor badge to top-right of children
  const text = typeof count === 'number' && count > max ? `${max}+` : count;
  return (
    <span className={className} style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {children}
      <span style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(35%,-35%)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        minWidth: dot ? 8 : 18, height: dot ? 8 : 18, padding: dot ? 0 : '0 5px', borderRadius: 1000,
        background: color, color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, lineHeight: 1,
        boxShadow: '0 0 0 2px var(--background-normal-normal,#fff)' }}>{dot ? '' : text}</span>
    </span>
  );
}

export default Badge;
