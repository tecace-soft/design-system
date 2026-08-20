import React from 'react';
import { Button } from '../action/Button.jsx';
/* TecAce — EmptyState: centered icon + title + description + optional action. */
export function EmptyState({ icon=null, title='결과가 없어요', description, actionLabel, onAction, className, style }) {
  return (
    <div className={className} style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:8, padding:'40px 24px', fontFamily:'var(--font-sans)', ...style }}>
      {icon && <span style={{ display:'inline-flex', width:48, height:48, color:'var(--label-disable, rgba(55,56,60,0.28))', marginBottom:4 }}>{icon}</span>}
      <div style={{ fontSize:17, fontWeight:600, lineHeight:1.412, color:'var(--label-normal)' }}>{title}</div>
      {description && <div style={{ fontSize:14, fontWeight:500, lineHeight:1.5, color:'var(--label-alternative, #8a8d94)', maxWidth:280 }}>{description}</div>}
      {actionLabel && <div style={{ marginTop:8 }}><Button label={actionLabel} variant="outlined" color="assistive" onClick={onAction} /></div>}
    </div>
  );
}
export default EmptyState;
