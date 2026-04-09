import React from 'react';
import { motion } from 'framer-motion';
import { KpiCard, TableCard } from '../components/Card';
import { StatusPill } from '../components/Table';

export default function Escalations({ complaints }) {
  const active = complaints.filter(c => ['escalated', 'police', 'investigating'].includes(c.status));

  const levelStyle = (lvl) => {
    if (lvl === 4) return { color: 'var(--red)',   bg: 'rgba(255,68,68,0.1)',   border: 'rgba(255,68,68,0.2)' };
    if (lvl === 3) return { color: 'var(--amber)', bg: 'rgba(240,160,32,0.1)',  border: 'rgba(240,160,32,0.2)' };
    return             { color: 'var(--blue)',  bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.2)' };
  };

  return (
    <div className="page-content scrollbar-thin">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="page-header">
        <div className="page-title">Active Escalations</div>
        <div className="page-sub">{active.length} complaints in the escalation pipeline</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.06 }}
        style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
        {[
          { label: 'University Level', count: complaints.filter(c => c.escalationLevel === 2).length, color: 'var(--blue)' },
          { label: 'Committee Level',  count: complaints.filter(c => c.escalationLevel === 3).length, color: 'var(--amber)' },
          { label: 'Police Level',     count: complaints.filter(c => c.escalationLevel === 4).length, color: 'var(--red)' },
        ].map(e => (
          <div className="kpi-card" key={e.label} style={{ flex: 1 }}>
            <div className="kpi-label">{e.label}</div>
            <div className="kpi-value" style={{ color: e.color }}>{e.count}</div>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 }}>
        <TableCard title="Escalation Queue">
          <table className="tbl">
            <thead><tr>
              <th>ID</th><th>Type</th><th>College</th><th>Level</th><th>Status</th><th>Assigned</th>
            </tr></thead>
            <tbody>
              {active.map(c => {
                const s = levelStyle(c.escalationLevel);
                return (
                  <tr key={c.id}>
                    <td style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text2)' }}>{c.id}</td>
                    <td>{c.type}</td>
                    <td style={{ color: 'var(--text2)' }}>{c.college}</td>
                    <td>
                      <span style={{ fontSize: 12, padding: '2px 10px', borderRadius: 999, background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                        Level {c.escalationLevel}
                      </span>
                    </td>
                    <td><StatusPill status={c.status} /></td>
                    <td style={{ fontSize: 12, color: 'var(--text2)' }}>{c.assignedTo}</td>
                  </tr>
                );
              })}
              {active.length === 0 && (
                <tr><td colSpan={6}><div className="empty-state">No active escalations.</div></td></tr>
              )}
            </tbody>
          </table>
        </TableCard>
      </motion.div>
    </div>
  );
}