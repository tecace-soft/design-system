import React from 'react';
import { Button } from '../action/Button.jsx';

/* TecAce — Alert (Alert/Alert): modal dialog with title, body, and 1–2 actions. */
export function Alert({
  title = '제목',
  description,
  primaryLabel = '확인',
  secondaryLabel,
  onPrimary,
  onSecondary,
  layout = 'horizontal',   // action layout: 'horizontal' | 'vertical'
  className,
  style,
}) {
  const vertical = layout === 'vertical';
  return (
    <div className={className} role="alertdialog" style={{ width: 320, maxWidth: '100%', borderRadius: 20,
      background: 'var(--background-elevated-normal,#fff)', boxShadow: '0 8px 28px rgba(23,23,25,0.16)',
      padding: 24, boxSizing: 'border-box', fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'center' }}>
        <span style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.445, letterSpacing: '-0.002em', color: 'var(--label-normal)' }}>{title}</span>
        {description && <span style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.467, color: 'var(--label-neutral, rgba(46,47,51,0.88))' }}>{description}</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: 8, marginTop: 24 }}>
        {secondaryLabel && <Button label={secondaryLabel} variant="outlined" color="assistive" size="lg" onClick={onSecondary} style={{ flex: 1 }} />}
        <Button label={primaryLabel} variant="solid" color="primary" size="lg" onClick={onPrimary} style={{ flex: 1 }} />
      </div>
    </div>
  );
}

export default Alert;
