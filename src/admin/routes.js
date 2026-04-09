export const ADMIN_BASE = '/app/admin';

export const ADMIN_ROUTES = {
  dashboard: `${ADMIN_BASE}/dashboard`,
  users: `${ADMIN_BASE}/users`,
  complaints: `${ADMIN_BASE}/complaints`,
  complaintDetails: (id = ':id') => `${ADMIN_BASE}/complaints/${id}`,
  escalations: `${ADMIN_BASE}/escalations`,
  alerts: `${ADMIN_BASE}/alerts`,
  logs: `${ADMIN_BASE}/logs`,
  fraud: `${ADMIN_BASE}/fraud`,
  config: `${ADMIN_BASE}/config`,
  reports: `${ADMIN_BASE}/reports`,
};

export const ADMIN_NAV = [
  { key: 'dashboard', label: 'Dashboard', path: ADMIN_ROUTES.dashboard },
  { key: 'users', label: 'Users', path: ADMIN_ROUTES.users },
  { key: 'complaints', label: 'Complaints', path: ADMIN_ROUTES.complaints },
  { key: 'escalations', label: 'Escalations', path: ADMIN_ROUTES.escalations },
  { key: 'alerts', label: 'Alerts', path: ADMIN_ROUTES.alerts },
  { key: 'logs', label: 'Logs', path: ADMIN_ROUTES.logs },
  { key: 'fraud', label: 'Fraud', path: ADMIN_ROUTES.fraud },
  { key: 'config', label: 'Config', path: ADMIN_ROUTES.config },
  { key: 'reports', label: 'Reports', path: ADMIN_ROUTES.reports },
];

const PAGE_TITLES = {
  dashboard: 'System Dashboard',
  users: 'User Management',
  complaints: 'Complaints',
  escalations: 'Escalations',
  alerts: 'System Alerts',
  logs: 'Audit Logs',
  fraud: 'Fraud Monitoring',
  config: 'System Configuration',
  reports: 'Reports',
};

export function getTitleFromPath(pathname) {
  if (/\/app\/admin\/complaints\/[^/]+$/.test(pathname)) {
    return 'Complaint Details';
  }

  const key = pathname.split('/').pop();
  return PAGE_TITLES[key] || 'System Dashboard';
}

