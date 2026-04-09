import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />
        <main className="min-h-screen flex-1">
          <Topbar />
          <div className="px-8 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}