import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { DataTable, StatusBadge } from '../components/Table';
import { useAdminState } from '../state/AdminStateProvider';

export default function Logs() {
  const { logs } = useAdminState();

  const rows = logs.map((log, index) => ({
    id: `${log.time}-${index}`,
    time: log.time,
    level: log.level,
    actor: log.actor,
    message: log.msg,
  }));

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <Card title="Audit Trail" subtitle="Chronological admin + system actions">
        <DataTable
          columns={[
            { key: 'time', label: 'Timestamp' },
            { key: 'level', label: 'Level', render: (row) => <StatusBadge status={row.level} /> },
            { key: 'actor', label: 'Actor' },
            { key: 'message', label: 'Message' },
          ]}
          rows={rows}
          emptyMessage="No logs captured yet."
        />
      </Card>
    </motion.div>
  );
}

