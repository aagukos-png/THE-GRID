
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { UserRole, Job } from './types';

// --- Shared Components ---
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-2 text-sm">{subtitle}</p>}
  </div>
);

// --- Page Components ---
const Hero = ({ onAction }: { onAction: () => void }) => (
  <section className="relative bg-[#0F172A] overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 py-24 lg:py-32 flex flex-col items-center text-center relative z-10">
      <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-blue-500/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Regulated Marketplace
      </div>
      <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
        The Professional Home for <br/>
        <span className="text-amber-500">EPRA-Licensed</span> Experts.
      </h1>
      <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mb-12 font-medium leading-relaxed">
        Connect verified electricians and solar technicians with compliant contractors. Secure payments, digital agreements, and protected rates.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button 
          onClick={onAction}
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
        >
          I am a Technician
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0F172A] font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all">
          I am a Contractor
        </button>
      </div>
    </div>
  </section>
);

const PricingPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <SectionHeader 
      title="Pricing & Fair Rates" 
      subtitle="Standardized KES rates enforced by THE GRID to prevent undercutting and ensure quality." 
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { class: 'Class A-1', rate: 'KES 15,000+', desc: 'Multi-story commercial & industrial wiring' },
        { class: 'Class B', rate: 'KES 8,500+', desc: 'Domestic & small commercial installations' },
        { class: 'Solar T3', rate: 'KES 12,000+', desc: 'Advanced grid-tie & hybrid systems' },
        { class: 'Class C1', rate: 'KES 5,000+', desc: 'Basic domestic maintenance & repair' },
        { class: 'Solar T1/T2', rate: 'KES 7,500+', desc: 'Standard residential PV systems' },
      ].map((p, i) => (
        <div key={i} className="p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{p.class}</div>
          <div className="text-3xl font-bold text-[#0F172A] mb-4">{p.rate}<span className="text-slate-400 text-xs font-normal"> /day</span></div>
          <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 p-6 bg-amber-50 border border-amber-100 rounded text-amber-800 text-sm italic">
      * All rates are minimum floors. Contractors can offer higher based on project complexity and duration.
    </div>
  </div>
);

const Dashboard = ({ role, jobs }: { role: UserRole; jobs: Job[] }) => {
  if (role === 'technician') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 flex flex-col gap-6">
            <div className="bg-white p-6 border border-slate-200 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                 <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-[#0F172A]">John Kamau</h3>
              <div className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest rounded-full">
                Class B Certified
              </div>
            </div>

            <div className="bg-[#0F172A] p-6 text-white flex flex-col gap-2">
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Wallet Balance</div>
              <div className="text-2xl font-bold">KES 12,450</div>
              <button className="mt-4 w-full py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700">Withdraw</button>
            </div>

            <div className="bg-white p-6 border border-slate-200">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Digital License Wallet</h4>
              <div className="flex flex-col gap-3">
                <div className="p-3 border border-slate-100 bg-slate-50 text-[10px] font-medium flex justify-between items-center">
                  <span>EPRA/EW/09822</span>
                  <span className="text-emerald-600 font-bold uppercase">Valid</span>
                </div>
                <button className="text-xs font-bold text-blue-600 text-left hover:underline">Update License Document</button>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-col gap-8">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-bold text-[#0F172A]">Recommended Jobs</h2>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Nairobi, KE</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map(job => (
                <div key={job.id} className="bg-white p-6 border border-slate-200 hover:border-blue-500 transition-all flex flex-col h-full shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest">{job.requiredClass} License Req.</span>
                    <span className="text-lg font-bold text-[#0F172A]">KES {job.budget.toLocaleString()}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{job.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">{job.description}</p>
                  <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                     <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <button className="px-4 py-2 bg-[#0F172A] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800">View & Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (role === 'contractor') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white border border-slate-200 p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-1">Contractor Hub</h2>
            <p className="text-slate-500 text-sm">Post projects and hire EPRA-certified professionals securely.</p>
          </div>
          <button className="px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-500/20">
            Post a New Job
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em]">Your Active Projects</h3>
            {jobs.slice(0, 1).map(job => (
              <div key={job.id} className="bg-white p-6 border-l-4 border-blue-600 border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg">{job.title}</h4>
                  <p className="text-slate-400 text-xs mt-1">Status: <span className="text-blue-600 font-bold uppercase text-[10px]">Open for Bidding</span></p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">KES {job.budget.toLocaleString()}</div>
                  <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 mt-2">Applicants (12)</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
             <h3 className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em]">Verified Technicians</h3>
             <div className="bg-white border border-slate-200 divide-y divide-slate-100">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                     <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                     </div>
                     <div>
                        <div className="text-sm font-bold text-slate-900">Expert Tech {i}</div>
                        <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Class A Certified</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 text-center bg-slate-50 border-y border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Account Access Required</h2>
      <p className="text-slate-500 max-w-sm mx-auto mb-8">Please login or select a role from the navigation bar to view your dashboard.</p>
      <button className="bg-[#0F172A] text-white px-8 py-4 font-bold uppercase tracking-widest text-xs">Sign In</button>
    </div>
  );
};

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>('guest');
  const [page, setPage] = useState<string>('home');
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Commercial Solar Installation',
      description: 'Phase 2 installation for an office building in Westlands.',
      requiredClass: 'T3',
      location: 'Nairobi',
      budget: 150000,
      duration: '14 days',
      status: 'open',
      contractorId: 'c1',
      postedAt: new Date()
    },
    {
      id: '2',
      title: 'Residential Wiring Rewind',
      description: 'Full house rewiring for a legacy estate in Muthaiga.',
      requiredClass: 'B',
      location: 'Nairobi',
      budget: 45000,
      duration: '3 days',
      status: 'open',
      contractorId: 'c2',
      postedAt: new Date()
    }
  ]);

  const renderContent = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard role={role} jobs={jobs} />;
      case 'pricing':
        return <PricingPage />;
      case 'how-it-works':
        return (
          <div className="max-w-4xl mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold mb-8 text-[#0F172A]">How THE GRID Works</h1>
            <div className="flex flex-col gap-12">
              {[
                { step: '01', title: 'Verify Your License', desc: 'Technicians upload their EPRA license. Our AI-driven verification system ensures only legitimate professionals join.' },
                { step: '02', title: 'Smart Matching', desc: 'Contractors post structured jobs. Our system enforces license class matching, ensuring qualified techs bid.' },
                { step: '03', title: 'Protected Escrow', desc: 'Payments are held in a secure escrow. No work starts without a deposit, and no payment is released without verification.' },
                { step: '04', title: 'Reputation Building', desc: 'Complete jobs, get rated, and build your digital license wallet which serves as a verified career history.' }
              ].map((s, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-6xl font-bold text-slate-100 group-hover:text-blue-100 transition-colors leading-none">{s.step}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero onAction={() => { setRole('technician'); setPage('dashboard'); }} />
            <div className="bg-white border-y border-slate-200 py-12">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: 'Verified Techs', value: '1,200+' },
                  { label: 'Active Projects', value: '340' },
                  { label: 'Compliance Rate', value: '100%' },
                  { label: 'Total Payments', value: 'KES 14M' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl lg:text-4xl font-bold text-[#0F172A] mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <section className="py-24 px-4 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Engineered for Trust</h2>
                <p className="text-slate-500 max-w-xl mx-auto">Protecting the integrity of the energy sector in Kenya.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'License Escrow', desc: 'Secure license engagement for a set period, ensuring compliant hiring.' },
                  { title: 'Standard Pricing', desc: 'Rule-based matching with minimum pricing floors to prevent undercutting.' },
                  { title: 'Instant Payments', desc: 'Automated release to M-Pesa or Bank once project milestones are verified.' }
                ].map((f, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-slate-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 20l9 2 9-2-1.382-14.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#0F172A]">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-blue-600 py-24 text-center px-4">
               <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Ready to standardise your work?</h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-10 py-5 bg-[#0F172A] text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">Get Started Free</button>
                  <button onClick={() => setPage('pricing')} className="w-full sm:w-auto px-10 py-5 bg-white text-[#0F172A] font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all">View Fair Rates</button>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <Layout 
      role={role} 
      onRoleChange={setRole} 
      currentPage={page} 
      onPageChange={setPage}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
