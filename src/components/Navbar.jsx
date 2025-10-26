import React from 'react';
import { CreditCard, Shield, BarChart3, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
              <CreditCard size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">CreditTorch</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#admin" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
              <Shield size={16} /> Admin
            </a>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
              <BarChart3 size={16} /> Get Started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-700 shadow-sm">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <a href="#features" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Features</a>
              <a href="#solutions" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Solutions</a>
              <a href="#blog" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Blog</a>
              <div className="flex gap-2 pt-2">
                <a href="#admin" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                  <Shield size={16} /> Admin
                </a>
                <a href="#get-started" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                  <BarChart3 size={16} /> Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
