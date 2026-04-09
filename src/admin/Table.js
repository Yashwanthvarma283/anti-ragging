import React from 'react';

export function StatusPill({ status }) {
  const labels = {
    pending:      'Pending',
    escalated:    'Escalated',
    resolved:     'Resolved',
    investigating:'Investigating',
    police:       'Police',
  };
  return (
    <span className={`status-pill status-${status}`}>
      {labels[status] || status}
    </span>
  );
}

export function SeverityBadge({ severity }) {
  const cls =
    severity === 'High'   ? 'severity-high'   :
    severity === 'Medium' ? 'severity-medium' :
                            'severity-low';
  return <span className={cls} style={{ fontSize: 12 }}>{severity}</span>;
}

export function DataTable({ columns, rows, onRowClick }) {
  return (
    <table className="tbl">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key || col.label}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>
              <div className="empty-state">No records found.</div>
            </td>
          </tr>
        ) : (
          rows.map((row, i) => (
            <tr
              key={row.id || i}
              className={onRowClick ? 'clickable' : ''}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map(col => (
                <td key={col.key || col.label}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export function ProgressBar({ value, max, color }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${pct}%`, background: color || 'var(--blue)' }} />
    </div>
  );
}