import React from 'react';
/* TecAce — ListRow (List Cell/Resource): leading + title/description + trailing. */
export function ListRow({ leading = null, title, description, trailing = null, onClick, divider = false, className, style }) {
  return (
    <div onClick={onClick} className={className} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
      cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-sans)',
      boxShadow: divider ? 'inset 0 -1px 0 var(--line-normal, rgba(112,115,124,0.12))' : 'none', ...style }}>
      {leading && <span style={{ flexShrink: 0, display: 'inline-flex' }}>{leading}</span>}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: 'var(--label-normal)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
        {description && <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.385, color: 'var(--label-alternative, #8a8d94)', marginTop: 2 }}>{description}</div>}
      </div>
      {trailing && <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', color: 'var(--label-alternative, #8a8d94)' }}>{trailing}</span>}
    </div>
  );
}
export default ListRow;
