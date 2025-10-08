import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm">
        <div className="max-w-10xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <span className="text-[#1a1a1a] font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-extrabold">Nsaanee</span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop links - hidden on small screens */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/about"
                className={`hover:text-emerald-500 transition-colors ${
                  location.pathname === '/about' ? 'text-emerald-500' : ''
                }`}
              >
                About
              </Link>
              <Link
                to="/research"
                className={`hover:text-emerald-500 transition-colors ${
                  location.pathname === '/research' ? 'text-emerald-500' : ''
                }`}
              >
                Research
              </Link>
              <a href="mailto:bnsaanee7@gmail.com" className="hover:text-emerald-500 transition-colors">Contact</a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#1a1a1a]/95">
            <div className="max-w-10xl mx-auto px-6 py-4 flex flex-col gap-3">
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`hover:text-emerald-500 transition-colors ${
                  location.pathname === '/about' ? 'text-emerald-500' : ''
                }`}
              >
                About
              </Link>
              <Link
                to="/research"
                onClick={() => setMobileOpen(false)}
                className={`hover:text-emerald-500 transition-colors ${
                  location.pathname === '/research' ? 'text-emerald-500' : ''
                }`}
              >
                Research
              </Link>
              <a href="mailto:bnsaanee7@gmail.com" onClick={() => setMobileOpen(false)} className="hover:text-emerald-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>
    </div>
  );
}
