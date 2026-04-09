import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, KpiCard } from '../components/Card';
import { DataTable, StatusBadge } from '../components/Table';
import { useAdminState } from '../state/AdminStateProvider';

const fadeIn = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };

export default function Escalations() {
  const { complaints } = useAdminState();

  const escalatedComplaints = useMemo(
    () => complaints.filter((complaint) => ['escalated', 'police'].includes(complaint.status)),
    [complaints]
  );

  const tableRows = escalatedComplaints.map((complaint) => ({
    id: complaint.id,
    status: complaint.status,
    priority: complaint.severity,
    college: complaint.college,
    assignedTo: complaint.assignedTo,
    level: complaint.escalationLevel,
  }));

  return (
    <motion.div {...fadeIn} transition={{ duration: 0.25 }} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard label="Escalated" value={escalatedComplaints.filter((item) => item.status === 'escalated').length} hint="Committee handover" />
        <KpiCard label="Police Level" value={escalatedComplaints.filter((item) => item.status === 'police').length} hint="Law enforcement" />
        <KpiCard label="Total Escalations" value={escalatedComplaints.length} hint="Active priority queue" />
      </div>

      <Card title="Escalation Queue" subtitle="Filtered directly from complaints state">
        <DataTable
          columns={[
            { key: 'id', label: 'Complaint ID' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            { key: 'priority', label: 'Priority' },
            { key: 'level', label: 'Level', render: (row) => `L${row.level}` },
            { key: 'college', label: 'College' },
            { key: 'assignedTo', label: 'Assigned To' },
          ]}
          rows={tableRows}
          emptyMessage="No escalated complaints right now."
        />
      </Card>
    </motion.div>
  );
}

