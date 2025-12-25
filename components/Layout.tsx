
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, role, onRoleChange, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Rates' },
    { id: 'trust', label: 'Trust' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (id: string) => {
    onPageChange(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Disclaimer Bar */}
      <div className="bg-amber-500 text-white text-[10px] text-center py-1.5 font-bold uppercase tracking-widest px-4 z-50 relative">
        THE GRID is an independent platform for EPRA-licensed professionals.
      </div>

      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm px-4 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
          <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center rounded-sm">
            <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter text-[#0F172A] font-heading">THE GRID</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                currentPage === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <select 
              className="text-[10px] font-black uppercase tracking-widest border-slate-200 bg-slate-50 rounded px-2 py-1.5 outline-none cursor-pointer"
              value={role}
              onChange={(e) => onRoleChange(e.target.value as UserRole)}
            >
              <option value="guest">Guest</option>
              <option value="technician">Technician</option>
              <option value="contractor">Contractor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button 
            onClick={() => handleNav('contact')}
            className="bg-[#0F172A] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all"
          >
            Join
          </button>
          {/* Mobile Menu Toggle */}
          <button className="xl:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 py-4 px-4 flex flex-col gap-4 shadow-xl z-30 sticky top-16">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left text-sm font-bold uppercase tracking-widest py-2 ${
                currentPage === item.id ? 'text-blue-600' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100">
             <select 
              className="w-full text-xs font-bold uppercase tracking-widest border-slate-200 bg-slate-50 rounded px-3 py-3 outline-none"
              value={role}
              onChange={(e) => onRoleChange(e.target.value as UserRole)}
            >
              <option value="guest">Role: Guest</option>
              <option value="technician">Role: Technician</option>
              <option value="contractor">Role: Contractor</option>
              <option value="admin">Role: Admin</option>
            </select>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="w-full bg-[#0F172A] py-16 px-4 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 flex items-center justify-center rounded-sm">
                 <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tighter font-heading">THE GRID</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Kenya's regulated marketplace for electrical and solar PV professionals. Standardizing license engagement, fair rates, and secure escrow payments.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-slate-500">Navigation</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <li><button onClick={() => handleNav('home')} className="hover:text-white text-left">Find Experts</button></li>
              <li><button onClick={() => handleNav('pricing')} className="hover:text-white text-left">Market Rates</button></li>
              <li><button onClick={() => handleNav('trust')} className="hover:text-white text-left">License Security</button></li>
              <li><button onClick={() => handleNav('how-it-works')} className="hover:text-white text-left">How It Works</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-slate-500">Support</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <li><button onClick={() => handleNav('faqs')} className="hover:text-white text-left">Common Questions</button></li>
              <li><button onClick={() => handleNav('legal')} className="hover:text-white text-left">Legal Disclaimer</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white text-left">Contact Help</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white text-left">Report Misuse</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
          <p>© 2024 THE GRID. REGISTERED DATA CONTROLLER.</p>
          <div className="flex gap-6">
            <span className="text-emerald-500">System Status: Optimal</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
