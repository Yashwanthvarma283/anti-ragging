import React from 'react';
import { motion } from 'framer-motion';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { StatusBadge } from '../components/Table';
import { ADMIN_ROUTES } from '../routes';
import { useAdminState } from '../state/AdminStateProvider';

function getEscalatedStatus(status) {
  if (status === 'escalated') return 'police';
  if (status === 'police') return 'police';
  return 'escalated';
}

export default function ComplaintDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { complaints, setComplaintStatus } = useAdminState();

  const complaint = complaints.find((item) => item.id === id);

  if (!complaint) {
    return <Navigate to={ADMIN_ROUTES.complaints} replace />;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-5">
      <button
        type="button"
        onClick={() => navigate(ADMIN_ROUTES.complaints)}
        className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
      >
        Back to complaints
      </button>

      <Card title={complaint.id} subtitle="Complaint overview">
        <div className="grid gap-3 text-sm md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Status</p>
            <div className="mt-2"><StatusBadge status={complaint.status} /></div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Priority</p>
            <p className="mt-2 font-medium text-zinc-900">{complaint.severity}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Escalation Level</p>
            <p className="mt-2 font-medium text-zinc-900">L{complaint.escalationLevel}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setComplaintStatus(complaint.id, getEscalatedStatus(complaint.status))}
            className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Escalate
          </button>
          <button
            type="button"
            onClick={() => setComplaintStatus(complaint.id, 'resolved')}
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            Resolve
          </button>
        </div>
      </Card>

      <Card title="Description" subtitle="Filed complaint details">
        <p className="text-sm leading-7 text-zinc-600">{complaint.desc}</p>
      </Card>
    </motion.div>
  );
}