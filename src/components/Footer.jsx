import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} CreditTorch. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-gray-900" href="#privacy">Privacy</a>
            <a className="hover:text-gray-900" href="#terms">Terms</a>
            <a className="hover:text-gray-900" href="#status">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
