import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { useAdminState } from '../state/AdminStateProvider';

function Toggle({ checked, onChange, label, description }) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-zinc-200 p-4">
      <div>
        <p className="text-sm font-medium text-zinc-900">{label}</p>
        <p className="mt-1 text-xs text-zinc-500">{description}</p>
      </div>
      <input type="checkbox" checked={checked} onChange={onChange} className="mt-1 h-4 w-4 accent-zinc-900" />
    </label>
  );
}

export default function Config() {
  const { config, updateConfig } = useAdminState();

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
      <Card title="Escalation Rules" subtitle="Dummy controls wired to shared state">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="rounded-xl border border-zinc-200 p-4">
            <p className="text-sm font-medium text-zinc-900">Auto-escalation threshold (hours)</p>
            <input
              type="number"
              min="1"
              value={config.escalationHours}
              onChange={(event) => updateConfig('escalationHours', Number(event.target.value) || 1)}
              className="mt-3 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900"
            />
          </label>
        </div>
      </Card>

      <Card title="System Toggles" subtitle="Runtime behavior switches">
        <div className="space-y-3">
          <Toggle
            checked={config.autoEscalationEnabled}
            onChange={(event) => updateConfig('autoEscalationEnabled', event.target.checked)}
            label="Enable auto escalation"
            description="Automatically pushes complaints to higher authorities when SLA is exceeded."
          />
          <Toggle
            checked={config.fraudDetectionEnabled}
            onChange={(event) => updateConfig('fraudDetectionEnabled', event.target.checked)}
            label="Enable fraud detector"
            description="Monitors repeated submissions and suspicious usage patterns."
          />
          <Toggle
            checked={config.policeEscalationEnabled}
            onChange={(event) => updateConfig('policeEscalationEnabled', event.target.checked)}
            label="Enable police escalation"
            description="Allows final escalation level to law enforcement."
          />
        </div>
      </Card>
    </motion.div>
  );
}

