import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, KpiCard } from '../components/Card';
import { useAdminState } from '../state/AdminStateProvider';

function DistributionBar({ label, value, total }) {
  const percentage = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-zinc-600">
        <span>{label}</span>
        <span>{value} ({percentage}%)</span>
      </div>
      <div className="h-2 w-full rounded-full bg-zinc-100">
        <div className="h-2 rounded-full bg-zinc-900 transition-all duration-300" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default function Reports() {
  const { complaints, users } = useAdminState();

  const stats = useMemo(() => {
    const total = complaints.length;
    const pending = complaints.filter((item) => item.status === 'pending').length;
    const resolved = complaints.filter((item) => item.status === 'resolved').length;
    const escalated = complaints.filter((item) => ['escalated', 'police'].includes(item.status)).length;

    return { total, pending, resolved, escalated };
  }, [complaints]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <KpiCard label="Total Complaints" value={stats.total} hint="All-time intake" />
        <KpiCard label="Pending" value={stats.pending} hint="Needs action" />
        <KpiCard label="Escalated" value={stats.escalated} hint="Escalation pipeline" />
        <KpiCard label="Resolved" value={stats.resolved} hint="Closed cases" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Complaint Distribution">
          <div className="space-y-4">
            <DistributionBar label="Pending" value={stats.pending} total={stats.total} />
            <DistributionBar
              label="Investigating"
              value={complaints.filter((item) => item.status === 'investigating').length}
              total={stats.total}
            />
            <DistributionBar label="Escalated" value={stats.escalated} total={stats.total} />
            <DistributionBar label="Resolved" value={stats.resolved} total={stats.total} />
          </div>
        </Card>

        <Card title="Platform Summary">
          <div className="space-y-3 text-sm text-zinc-600">
            <p>Total users in the system: <span className="font-semibold text-zinc-900">{users.length}</span></p>
            <p>Flagged or suspended users: <span className="font-semibold text-zinc-900">{users.filter((u) => u.status !== 'active').length}</span></p>
            <p>High priority complaints: <span className="font-semibold text-zinc-900">{complaints.filter((c) => c.severity === 'High').length}</span></p>
            <p>Auto-generated from shared store for backend report API integration.</p>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

