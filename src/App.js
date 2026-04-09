import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import AdminApp from './admin/layout/AdminApp';

function LandingRoute() {
  const navigate = useNavigate();

  return <LandingPage onGoAdmin={() => navigate('/app/admin/dashboard')} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingRoute />} />
      <Route path="/app/admin/*" element={<AdminApp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}