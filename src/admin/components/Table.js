import React from 'react';

export function StatusBadge({ status }) {
  const normalized = String(status || '').toLowerCase();
  const styleByStatus = {
    pending: 'border-zinc-300 bg-zinc-100 text-zinc-700',
    investigating: 'border-zinc-400 bg-zinc-100 text-zinc-800',
    escalated: 'border-zinc-500 bg-zinc-200 text-zinc-900',
    police: 'border-black bg-zinc-900 text-white',
    resolved: 'border-zinc-200 bg-zinc-50 text-zinc-600',
    active: 'border-zinc-300 bg-zinc-100 text-zinc-700',
    suspended: 'border-zinc-900 bg-zinc-800 text-white',
    flagged: 'border-zinc-500 bg-zinc-300 text-zinc-900',
  };

  const badgeStyle = styleByStatus[normalized] || 'border-zinc-300 bg-zinc-100 text-zinc-700';

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${badgeStyle}`}>
      {normalized || 'unknown'}
    </span>
  );
}

export function DataTable({ columns, rows, onRowClick, emptyMessage = 'No records found.' }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key || column.label}
                className="border-b border-zinc-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-zinc-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr
                key={row.id || index}
                onClick={() => onRowClick?.(row)}
                className={`${onRowClick ? 'cursor-pointer' : ''} transition-colors duration-150 hover:bg-zinc-50`}
              >
                {columns.map((column) => (
                  <td key={column.key || column.label} className="border-b border-zinc-100 px-4 py-3 text-sm text-zinc-700">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

