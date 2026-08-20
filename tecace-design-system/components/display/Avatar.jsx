import React from 'react';

/* TecAce — Avatar (Avatar/Avatar): Person or Company, sizes, image or placeholder. */
const SIZES = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64, '2xl': 80 };

export function Avatar({ src, alt = '', name = '', variant = 'person', size = 'md', className, style, ...rest }) {
  const px = SIZES[size] || (typeof size === 'number' ? size : 40);
  const radius = variant === 'company' ? Math.round(px * 0.28) : 1000;
  const initials = name ? name.trim().slice(0, 2) : '';
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: px, height: px, borderRadius: radius, overflow: 'hidden', flexShrink: 0,
      background: 'var(--fill-normal, rgba(112,115,124,0.08))', color: 'var(--label-alternative, #8a8d94)',
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: px * 0.38, boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.10)', ...style }} {...rest}>
      {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials ? initials
        : <svg width={px * 0.6} height={px * 0.6} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.7-8 6v1h16v-1c0-3.3-3.6-6-8-6z" /></svg>}
    </span>
  );
}

/* Avatar/Avatar Group: overlapping stack with optional +N overflow. */
export function AvatarGroup({ avatars = [], size = 'md', max = 4, className, style }) {
  const px = SIZES[size] || 40;
  const shown = avatars.slice(0, max);
  const extra = avatars.length - shown.length;
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', ...style }}>
      {shown.map((a, i) => (
        <span key={i} style={{ marginLeft: i === 0 ? 0 : -px * 0.3, boxShadow: '0 0 0 2px var(--background-normal-normal,#fff)', borderRadius: 1000 }}>
          <Avatar {...a} size={size} />
        </span>
      ))}
      {extra > 0 && (
        <span style={{ marginLeft: -px * 0.3, width: px, height: px, borderRadius: 1000, display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center', background: 'var(--fill-strong, rgba(112,115,124,0.16))',
          color: 'var(--label-normal)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: px * 0.34,
          boxShadow: '0 0 0 2px var(--background-normal-normal,#fff)' }}>+{extra}</span>
      )}
    </span>
  );
}

export default Avatar;
