import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminStateProvider } from '../state/AdminStateProvider';
import AdminLayout from './AdminLayout';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Complaints from '../pages/Complaints';
import ComplaintDetails from '../pages/ComplaintDetails';
import Escalations from '../pages/Escalations';
import Alerts from '../pages/Alerts';
import Logs from '../pages/Logs';
import Fraud from '../pages/Fraud';
import Config from '../pages/Config';
import Reports from '../pages/Reports';

export default function AdminApp() {
  return (
    <AdminStateProvider>
      <AdminLayout>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="complaints/:id" element={<ComplaintDetails />} />
          <Route path="escalations" element={<Escalations />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="logs" element={<Logs />} />
          <Route path="fraud" element={<Fraud />} />
          <Route path="config" element={<Config />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </AdminLayout>
    </AdminStateProvider>
  );
}