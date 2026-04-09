import React from 'react';

export function Card({ title, subtitle, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm ${className}`}>
      {(title || subtitle) && (
        <header className="mb-4">
          {title ? <h3 className="text-sm font-semibold text-zinc-900">{title}</h3> : null}
          {subtitle ? <p className="mt-1 text-xs text-zinc-500">{subtitle}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}

export function KpiCard({ label, value, hint }) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-zinc-900">{value}</p>
      <p className="mt-2 text-xs text-zinc-500">{hint}</p>
    </Card>
  );
}

