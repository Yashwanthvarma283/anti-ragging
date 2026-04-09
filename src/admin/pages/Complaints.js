import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { DataTable, StatusBadge } from '../components/Table';
import { useAdminState } from '../state/AdminStateProvider';
import { ADMIN_ROUTES } from '../routes';

const FILTERS = ['all', 'pending', 'investigating', 'escalated', 'police', 'resolved'];

export default function Complaints() {
  const navigate = useNavigate();
  const { complaints } = useAdminState();
  const [statusFilter, setStatusFilter] = useState('all');

  const rows = useMemo(() => {
    return complaints
      .filter((complaint) => statusFilter === 'all' || complaint.status === statusFilter)
      .map((complaint) => ({
        id: complaint.id,
        status: complaint.status,
        priority: complaint.severity,
      }));
  }, [complaints, statusFilter]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-zinc-500">Click any complaint row to open full details.</p>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setStatusFilter(filter)}
              className={`rounded-full border px-3 py-1 text-xs font-medium capitalize transition-colors ${
                statusFilter === filter
                  ? 'border-zinc-900 bg-zinc-900 text-white'
                  : 'border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <Card title="Complaints" subtitle={`${rows.length} records shown`}>
        <DataTable
          columns={[
            { key: 'id', label: 'ID' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            { key: 'priority', label: 'Priority' },
          ]}
          rows={rows}
          onRowClick={(row) => navigate(ADMIN_ROUTES.complaintDetails(row.id))}
          emptyMessage="No complaints found for this filter."
        />
      </Card>
    </motion.div>
  );
}