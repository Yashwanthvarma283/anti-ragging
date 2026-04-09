import React from 'react';

export function KpiCard({ label, value, delta, deltaDir }) {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      {delta && <div className={`kpi-delta ${deltaDir || ''}`}>{delta}</div>}
    </div>
  );
}

export function TableCard({ title, actions, children }) {
  return (
    <div className="table-card">
      {(title || actions) && (
        <div className="table-header">
          {title && <span className="table-title">{title}</span>}
          {actions && <div style={{ display: 'flex', gap: 8 }}>{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

export function DetailCard({ title, children, style }) {
  return (
    <div className="detail-card" style={style}>
      {title && <div className="detail-section-title">{title}</div>}
      {children}
    </div>
  );
}