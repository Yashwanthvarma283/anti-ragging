import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { DataTable, StatusBadge } from '../components/Table';
import { useAdminState } from '../state/AdminStateProvider';

export default function Fraud() {
  const { users, complaints } = useAdminState();

  const flaggedUsers = users.filter((user) => user.status === 'flagged' || user.complaints >= 3);
  const suspiciousComplaints = complaints.filter((complaint) => complaint.severity === 'High' && complaint.status !== 'resolved');

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
      <Card title="Flagged Users" subtitle="Users requiring manual review">
        <DataTable
          columns={[
            { key: 'id', label: 'User ID' },
            { key: 'name', label: 'Name' },
            { key: 'role', label: 'Role' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
            { key: 'complaints', label: 'Complaint Count' },
          ]}
          rows={flaggedUsers}
          emptyMessage="No flagged users found."
        />
      </Card>

      <Card title="Suspicious Complaints" subtitle="High-priority unresolved complaints">
        <DataTable
          columns={[
            { key: 'id', label: 'Complaint ID' },
            { key: 'college', label: 'College' },
            { key: 'severity', label: 'Priority' },
            { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
          ]}
          rows={suspiciousComplaints}
          emptyMessage="No suspicious complaint patterns detected."
        />
      </Card>
    </motion.div>
  );
}

