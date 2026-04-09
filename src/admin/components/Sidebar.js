import React from 'react';
import { NavLink } from 'react-router-dom';
import { ADMIN_NAV } from '../routes';
import { useAdminState } from '../state/AdminStateProvider';

function navCount(key, state) {
  if (key === 'complaints') return state.complaints.length;
  if (key === 'escalations') return state.complaints.filter((item) => ['escalated', 'police'].includes(item.status)).length;
  if (key === 'alerts') return state.alerts.length;
  if (key === 'fraud') return state.users.filter((user) => user.status === 'flagged' || user.complaints >= 3).length;
  return null;
}

export default function Sidebar() {
  const state = useAdminState();

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 px-6 py-6">
        <p className="text-xl font-semibold tracking-tight text-zinc-900">SafeCampus</p>
        <p className="mt-1 text-xs text-zinc-500">System Admin Module</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
        {ADMIN_NAV.map((item) => {
          const badge = navCount(item.key, state);
          return (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                }`
              }
            >
              <span>{item.label}</span>
              {badge ? (
                <span className="rounded-full border border-zinc-300 px-2 py-0.5 text-[11px] leading-none text-inherit">
                  {badge}
                </span>
              ) : null}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-zinc-200 px-6 py-4 text-xs text-zinc-500">All systems monitored in real-time.</div>
    </aside>
  );
}

