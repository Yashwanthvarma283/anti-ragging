import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, KpiCard } from '../components/Card';
import { DataTable, StatusBadge } from '../components/Table';
import { useAdminState } from '../state/AdminStateProvider';
import { ADMIN_ROUTES } from '../routes';

const fadeIn = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };

export default function Dashboard() {
  const navigate = useNavigate();
  const { complaints } = useAdminState();

  const stats = useMemo(() => {
    const total = complaints.length;
    const pending = complaints.filter((item) => item.status === 'pending').length;
    const escalated = complaints.filter((item) => ['escalated', 'police'].includes(item.status)).length;
    const resolved = complaints.filter((item) => item.status === 'resolved').length;
    return { total, pending, escalated, resolved };
  }, [complaints]);

  const recentRows = complaints.slice(0, 5).map((complaint) => ({
    id: complaint.id,
    status: complaint.status,
    priority: complaint.severity,
    college: complaint.college,
    assignedTo: complaint.assignedTo,
  }));

  return (
    <motion.div {...fadeIn} transition={{ duration: 0.25 }} className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Total Complaints" value={stats.total} hint="Across all partner campuses" />
        <KpiCard label="Pending" value={stats.pending} hint="Awaiting admin action" />
        <KpiCard label="Escalated" value={stats.escalated} hint="Committee or police level" />
        <KpiCard label="Resolved" value={stats.resolved} hint="Closed after intervention" />
      </section>

      <Card title="Latest Complaints" subtitle="Click a row to open case details">
        <DataTable
          columns={[
            { key: 'id', label: 'Complaint ID' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            { key: 'priority', label: 'Priority' },
            { key: 'college', label: 'College' },
            { key: 'assignedTo', label: 'Assigned To' },
          ]}
          rows={recentRows}
          onRowClick={(row) => navigate(ADMIN_ROUTES.complaintDetails(row.id))}
          emptyMessage="No complaints have been submitted yet."
        />
      </Card>
    </motion.div>
  );
}