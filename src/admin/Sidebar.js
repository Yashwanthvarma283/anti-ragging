import React from 'react';

const NAV = [
  { key: 'dashboard',   label: 'Dashboard',        icon: '⬡', section: 'Overview' },
  { key: 'complaints',  label: 'Complaints',        icon: '⚑', section: null, badge: 3 },
  { key: 'escalations', label: 'Escalations',       icon: '⚡', section: null, badge: 2 },
  { key: 'users',       label: 'Users',             icon: '◎', section: 'Management' },
  { key: 'alerts',      label: 'Alerts',            icon: '◉', section: null, badge: 2 },
  { key: 'fraud',       label: 'Fraud Detection',   icon: '⊘', section: 'Intelligence' },
  { key: 'logs',        label: 'System Logs',       icon: '≡', section: null },
  { key: 'reports',     label: 'Reports',           icon: '⊞', section: null },
  { key: 'config',      label: 'Configuration',     icon: '⊙', section: 'Settings' },
];

export default function Sidebar({ page, setPage }) {
  let lastSection = null;

  return (
    <div className="sidebar scrollbar-thin">
      <div className="sidebar-logo">
        <div className="sidebar-logo-text">Safe<span>Campus</span></div>
        <div className="sidebar-logo-sub">Admin Console</div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map(n => {
          const showSection = n.section && n.section !== lastSection;
          if (n.section) lastSection = n.section;
          return (
            <React.Fragment key={n.key}>
              {showSection && <div className="sidebar-section">{n.section}</div>}
              <button
                className={`nav-item ${page === n.key ? 'active' : ''}`}
                onClick={() => setPage(n.key)}
              >
                <span className="nav-item-icon">{n.icon}</span>
                {n.label}
                {n.badge && <span className="nav-badge">{n.badge}</span>}
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: 11, color: 'var(--text3)' }}>System Status</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
          <span style={{ fontSize: 12, color: 'var(--text2)' }}>All systems operational</span>
        </div>
      </div>
    </div>
  );
}