import React from 'react';

/* TecAce — Toast (Toast/Toast): transient dark snackbar with optional action. */
export function Toast({ message = '텍스트', actionLabel, onAction, leadingIcon = null, className, style }) {
  return (
    <div className={className} role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: 12,
      maxWidth: 512, padding: '14px 16px', borderRadius: 12, background: 'rgba(23,23,25,0.92)', backdropFilter: 'blur(8px)',
      color: '#fff', fontFamily: 'var(--font-sans)', boxShadow: '0 6px 20px rgba(0,0,0,0.24)', ...style }}>
      {leadingIcon && <span style={{ display: 'inline-flex', width: 20, height: 20, flexShrink: 0 }}>{leadingIcon}</span>}
      <span style={{ flex: 1, fontSize: 15, fontWeight: 500, lineHeight: 1.467 }}>{message}</span>
      {actionLabel && (
        <button type="button" onClick={onAction} style={{ border: 'none', background: 'transparent', cursor: 'pointer',
          color: 'var(--primary-normal-light, rgb(119,175,255))', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15,
          padding: 0, flexShrink: 0, outline: 'none' }}>{actionLabel}</button>
      )}
    </div>
  );
}

export default Toast;
