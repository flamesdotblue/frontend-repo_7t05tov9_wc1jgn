import React from 'react';
import { CreditCard, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Custom Loan Pages',
    desc: 'Launch tailored loan categories with dynamic rates, eligibility, and lead forms.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Admin',
    desc: 'JWT-based authentication and role controls to protect your operations.',
  },
  {
    icon: Zap,
    title: 'Automation-Ready',
    desc: 'Webhooks and queues so data flows to CRMs, underwriting, and analytics.',
  },
  {
    icon: BarChart3,
    title: 'Insights',
    desc: 'Real-time dashboards to track approvals, CAC, conversion, and risk.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for modern credit teams</h2>
          <p className="mt-3 text-gray-600">Everything you need to publish, collect, secure, and automate—without the bloat.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
