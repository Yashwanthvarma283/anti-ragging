import React from 'react';
import { useLocation } from 'react-router-dom';
import { getTitleFromPath } from '../routes';

export default function Topbar() {
  const location = useLocation();
  const title = getTitleFromPath(location.pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 px-8 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-zinc-900">{title}</h1>
          <p className="text-xs text-zinc-500">Smart Anti-Ragging System</p>
        </div>
        <div className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">Live</div>
      </div>
    </header>
  );
}

