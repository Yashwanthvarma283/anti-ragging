import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { DataTable, StatusBadge } from '../components/Table';
import { useAdminState } from '../state/AdminStateProvider';

export default function Users() {
  const { users, toggleUserBlock } = useAdminState();
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return users.filter((user) => {
      if (!normalized) return true;
      return (
        user.id.toLowerCase().includes(normalized) ||
        user.role.toLowerCase().includes(normalized) ||
        user.status.toLowerCase().includes(normalized)
      );
    });
  }, [users, query]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-500">Manage account access and moderation state.</p>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by ID, role or status"
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-zinc-900 sm:w-72"
        />
      </div>

      <Card title="Users" subtitle={`${rows.length} of ${users.length} users visible`}>
        <DataTable
          columns={[
            { key: 'id', label: 'ID' },
            { key: 'role', label: 'Role' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            {
              key: 'actions',
              label: 'Actions',
              render: (row) => (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleUserBlock(row.id);
                  }}
                  className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
                >
                  {row.status === 'suspended' ? 'Unblock' : 'Block'}
                </button>
              ),
            },
          ]}
          rows={rows}
          emptyMessage="No users match the current search."
        />
      </Card>
    </motion.div>
  );
}