import React from 'react';

/* TecAce — Card (Card/Card). radius 16, outlined or elevated. */
export function Card({ variant = 'outlined', padding = 20, onClick, className, style, children, ...rest }) {
  const skin = variant === 'elevated'
    ? { boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 4px 16px rgba(23,23,25,0.06)' }
    : { boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.22)' };
  return (
    <div onClick={onClick} className={className} style={{ borderRadius: 16, background: 'var(--background-elevated-normal, #fff)',
      padding, boxSizing: 'border-box', cursor: onClick ? 'pointer' : 'default', ...skin, ...style }} {...rest}>
      {children}
    </div>
  );
}

export default Card;
