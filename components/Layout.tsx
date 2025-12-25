
import React from 'react';
import { UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, role, onRoleChange, currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'dashboard', label: 'My Dashboard' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Disclaimer Bar */}
      <div className="bg-amber-500 text-white text-[10px] text-center py-1 font-bold uppercase tracking-widest px-4">
        THE GRID is an independent platform for EPRA-licensed professionals.
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm px-4 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onPageChange('home')}>
          <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center rounded-sm">
            <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter text-[#0F172A]">THE GRID</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-sm font-semibold tracking-tight transition-colors ${
                currentPage === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <select 
            className="text-xs font-bold border-slate-200 bg-slate-50 rounded px-2 py-1 outline-none"
            value={role}
            onChange={(e) => onRoleChange(e.target.value as UserRole)}
          >
            <option value="guest">Guest</option>
            <option value="technician">Technician</option>
            <option value="contractor">Contractor</option>
            <option value="admin">Admin</option>
          </select>
          <button className="bg-[#0F172A] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all">
            Login
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="w-full bg-[#0F172A] py-12 px-4 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 flex items-center justify-center rounded-sm">
                 <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tighter">THE GRID</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Standardizing pricing, license engagement, and payments for Kenya's electrical and solar energy professionals. Protecting technicians, contractors, and regulators.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Marketplace</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Find Electricians</a></li>
              <li><a href="#" className="hover:text-white">Solar Projects</a></li>
              <li><a href="#" className="hover:text-white">Fair Pricing Rates</a></li>
              <li><a href="#" className="hover:text-white">License Protection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">How It Works</a></li>
              <li><a href="#" className="hover:text-white">EPRA Guidelines</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <p>© 2024 THE GRID. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR KENYA, SCALABLE NATIONWIDE.</p>
        </div>
      </footer>
    </div>
  );
};
