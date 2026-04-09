import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { DataTable, StatusBadge } from '../components/Table';
import { useAdminState } from '../state/AdminStateProvider';

export default function Alerts() {
  const { alerts, complaints } = useAdminState();

  const delayedAlerts = useMemo(() => {
    return complaints
      .filter((complaint) => ['pending', 'investigating'].includes(complaint.status))
      .map((complaint) => ({
        id: `delay-${complaint.id}`,
        level: 'warning',
        title: `Delayed review: ${complaint.id}`,
        desc: `${complaint.college} complaint still in ${complaint.status}.`,
        time: 'Pending SLA',
      }));
  }, [complaints]);

  const rows = [...delayedAlerts, ...alerts].map((alert) => ({
    id: alert.id,
    level: alert.level,
    title: alert.title,
    description: alert.desc,
    time: alert.time,
  }));

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
      <Card title="System Alerts" subtitle="Operational and escalation alerts">
        <DataTable
          columns={[
            { key: 'title', label: 'Alert' },
            { key: 'level', label: 'Level', render: (row) => <StatusBadge status={row.level} /> },
            { key: 'description', label: 'Description' },
            { key: 'time', label: 'Time' },
          ]}
          rows={rows}
          emptyMessage="No active alerts."
        />
      </Card>
    </motion.div>
  );
}

