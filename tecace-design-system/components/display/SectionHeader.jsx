import React from 'react';
/* TecAce — SectionHeader (Section Header/Section Header): title + optional action. */
export function SectionHeader({ title, description, actionLabel, onAction, className, style }) {
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '20px 16px 12px', fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.012em', color: 'var(--label-normal)' }}>{title}</div>
        {description && <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5, color: 'var(--label-alternative, #8a8d94)', marginTop: 4 }}>{description}</div>}
      </div>
      {actionLabel && (
        <button type="button" onClick={onAction} style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer', flexShrink: 0,
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--label-alternative, #8a8d94)', outline: 'none' }}>{actionLabel}</button>
      )}
    </div>
  );
}
export default SectionHeader;
