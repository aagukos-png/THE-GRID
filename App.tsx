
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { 
  UserRole, Job, TechnicianProfile, ContractorProfile, 
  PricingRule, LicenseLog, LicenseClass 
} from './types';

// --- Kenyan Counties for Selects ---
const KENYAN_COUNTIES = [
  "Nairobi", "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita Taveta", 
  "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", "Tharaka-Nithi", 
  "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga", 
  "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans Nzoia", 
  "Uasin Gishu", "Elgeyo Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru", 
  "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", 
  "Busia", "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira"
];

// --- Formspree Integration ---
const FORMSPREE_URL = "https://formspree.io/f/mojagyle";

// --- Shared Components ---
const SectionHeader = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-center md:text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight font-heading">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-4 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white border border-slate-200 p-6 md:p-8 shadow-sm rounded-sm ${className}`}>
    {children}
  </div>
);

// --- Page Components ---

const Home = ({ onJoin }: { onJoin: (role: UserRole) => void }) => (
  <>
    <section className="relative bg-[#0F172A] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 py-24 lg:py-40 flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-blue-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Standardized Marketplace
        </div>
        <h1 className="text-4xl lg:text-8xl font-bold text-white tracking-tighter mb-10 leading-[1] font-heading">
          Trusted Power. <br/>
          <span className="text-amber-500">Fairly Paid.</span>
        </h1>
        <p className="text-slate-400 text-lg lg:text-2xl max-w-2xl mb-14 font-medium leading-relaxed">
          The official digital home for Kenya's EPRA-licensed energy experts. Secure agreements, locked pricing, and instant escrow payments.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <button 
            onClick={() => onJoin('technician')}
            className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-500/30"
          >
            I am a Technician
          </button>
          <button 
            onClick={() => onJoin('contractor')}
            className="w-full sm:w-auto px-12 py-5 bg-white text-[#0F172A] font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all border border-slate-200"
          >
            I am a Contractor
          </button>
        </div>
      </div>
    </section>

    <div className="bg-white border-y border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { label: 'Licensed Pros', value: '1,840+' },
          { label: 'Active Projects', value: '312' },
          { label: 'Compliance Rate', value: '100%' },
          { label: 'M-Pesa Payouts', value: 'KES 42M' }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl lg:text-5xl font-black text-[#0F172A] mb-2 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    <section className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader 
        title="Regulated & Protected" 
        subtitle="We build the infrastructure that allows Kenyan technicians to grow while keeping contractors compliant."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Digital License Wallet', desc: 'Immutable activity logs that prevent your EPRA license from being used without your knowledge.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
          { title: 'Smart Escrow', desc: 'Funds are secured from the contractor before any work begins. No more broken verbal agreements.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 20l9 2 9-2-1.382-14.016z' },
          { title: 'Standardized Rates', desc: 'Enforced pricing floors for Class A1, B, and Solar T3 categories to ensure high-quality professional standards.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
        ].map((f, i) => (
          <Card key={i} className="group hover:border-blue-500 transition-all">
            <div className="w-14 h-14 bg-slate-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#0F172A] font-heading">{f.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  </>
);

const TrustProtection = () => (
  <div className="max-w-5xl mx-auto px-4 py-24">
    <SectionHeader 
      title="Trust & License Security" 
      subtitle="How we protect the most valuable asset of an energy professional: Their License."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#0F172A]">Misuse Prevention</h3>
        <p className="text-slate-600 leading-relaxed">
          On THE GRID, every time a contractor "engages" a technician, a digital log is created. This log links the job duration to the technician's license number in an immutable audit trail.
        </p>
        <ul className="space-y-4">
          {['Real-time engagement tracking', 'Auto-expiry of license access', 'Anti-fraud document verification', 'Zero-tolerance for ghost hiring'].map(item => (
            <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-blue-600 p-8 text-white rounded-sm shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Digital License Wallet</h3>
        <p className="text-blue-100 text-sm mb-8">
          Your dashboard acts as a secure vault. See which projects are currently "using" your license and for how long.
        </p>
        <div className="p-4 bg-white/10 rounded border border-white/20">
          <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">Currently Engaged</div>
          <div className="text-xl font-bold mt-1">Solar PV Farm Phase II</div>
          <div className="text-xs mt-1 text-blue-200">Expires in 14 Days</div>
        </div>
      </div>
    </div>
  </div>
);

const FAQs = () => (
  <div className="max-w-3xl mx-auto px-4 py-24">
    <SectionHeader title="Common Questions" centered />
    <div className="space-y-6">
      {[
        { q: "Is THE GRID affiliated with EPRA?", a: "No. We are an independent private platform. We use EPRA licensing as a mandatory vetting standard to ensure safety and professional compliance in the Kenyan market." },
        { q: "How do payments work?", a: "We use an Escrow-style logic. Contractors pay the project budget to THE GRID. We hold it securely. Once the technician completes the work (or monthly milestone), the funds are released to their M-Pesa or Bank account." },
        { q: "What happens in a dispute?", a: "THE GRID has a dedicated dispute resolution team. We review evidence from both parties and can override escrow if work standards aren't met or if a technician is unfairly unpaid." },
        { q: "How do I get verified?", a: "Register with your name, license number, and a clear photo of your EPRA certificate. Our system verifies the document and category (e.g. Class B) before you can start bidding." }
      ].map((faq, i) => (
        <Card key={i} className="cursor-pointer hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#0F172A] mb-3">{faq.q}</h4>
          <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
        </Card>
      ))}
    </div>
  </div>
);

const LegalPage = () => (
  <div className="max-w-4xl mx-auto px-4 py-24">
    <SectionHeader title="Legal & Disclaimer" />
    <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
      <div className="p-6 bg-amber-50 border border-amber-100 text-amber-900 rounded-sm italic">
        "THE GRID is an independent platform for EPRA-licensed professionals. We operate as a technical marketplace and are not owned, managed, or funded by the Energy and Petroleum Regulatory Authority (EPRA)."
      </div>
      <section>
        <h3 className="text-xl font-bold text-[#0F172A] mb-4 uppercase tracking-widest text-sm">1. Professional Compliance</h3>
        <p>All users registered as technicians must hold a valid, unexpired license from the relevant regulatory body in Kenya. Failure to provide valid credentials will result in immediate account suspension.</p>
      </section>
      <section>
        <h3 className="text-xl font-bold text-[#0F172A] mb-4 uppercase tracking-widest text-sm">2. Escrow & Payments</h3>
        <p>Platform fees (typically 5-10%) are deducted from the total project budget before final release to the technician. This covers verification costs, insurance, and platform maintenance.</p>
      </section>
      <section>
        <h3 className="text-xl font-bold text-[#0F172A] mb-4 uppercase tracking-widest text-sm">3. Data Protection</h3>
        <p>We adhere to the Data Protection Act of Kenya. Your license details and contact information are only shared with verified contractors for the duration of a signed agreement.</p>
      </section>
    </div>
  </div>
);

const UserRegistration = ({ role, onComplete }: { role: UserRole; onComplete: () => void }) => {
  const isTech = role === 'technician';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <SectionHeader 
        title={isTech ? "Technician Registration" : "Contractor Registration"} 
        subtitle={isTech ? "Join 1,800+ licensed professionals getting paid fairly." : "Hire verified, compliant energy experts for your projects."}
      />
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
              <input required type="text" name="name" className="w-full px-4 py-3 border border-slate-200 focus:border-blue-500 outline-none bg-slate-50 rounded-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Mobile Number (M-Pesa)</label>
              <input required type="tel" name="phone" placeholder="+254..." className="w-full px-4 py-3 border border-slate-200 focus:border-blue-500 outline-none bg-slate-50 rounded-sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
              <input required type="email" name="email" className="w-full px-4 py-3 border border-slate-200 focus:border-blue-500 outline-none bg-slate-50 rounded-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Main County</label>
              <select name="location" className="w-full px-4 py-3 border border-slate-200 focus:border-blue-500 outline-none bg-slate-50 rounded-sm cursor-pointer">
                {KENYAN_COUNTIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">EPRA License No.</label>
              <input required type="text" name="license_number" className="w-full px-4 py-3 border border-slate-200 focus:border-blue-500 outline-none bg-slate-50 rounded-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">License Class</label>
              <select name="license_class" className="w-full px-4 py-3 border border-slate-200 focus:border-blue-500 outline-none bg-slate-50 rounded-sm cursor-pointer">
                <option value="A-1">Class A-1</option>
                <option value="B">Class B</option>
                <option value="C1">Class C1</option>
                <option value="C2">Class C2</option>
                <option value="T3">Solar T3</option>
                <option value="T2">Solar T2</option>
                <option value="T1">Solar T1</option>
                <option value="v1">v1 (Solar Contractor)</option>
                <option value="V2">V2 (Solar Contractor)</option>
              </select>
            </div>
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full py-5 bg-[#0F172A] text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl rounded-sm">
              Submit Verification Request
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

const Dashboard = ({ role, onNavigate }: { role: UserRole; onNavigate: (page: string) => void }) => {
  if (role === 'guest') {
    return (
      <div className="py-32 text-center max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0F172A] mb-4 font-heading">Secure Access Only</h2>
        <p className="text-slate-500 mb-8">You must be a verified technician or contractor to view your active digital wallet and projects.</p>
        <button onClick={() => onNavigate('home')} className="bg-blue-600 text-white px-10 py-4 font-black uppercase tracking-widest text-xs">Join The Grid</button>
      </div>
    );
  }

  if (role === 'technician') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-80 space-y-6">
            <Card className="text-center relative">
               <div className="absolute top-0 right-0 p-3">
                 <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-sm"></div>
               </div>
              <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                <svg className="w-14 h-14 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              </div>
              <h3 className="font-bold text-xl text-[#0F172A] font-heading">Eng. S. Otieno</h3>
              <div className="mt-3 inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-200">
                Verified: Class T3
              </div>
              <div className="mt-6 flex flex-col gap-2">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>Job Rating</span>
                    <span className="text-amber-500">4.9 ★</span>
                 </div>
                 <div className="w-full bg-slate-100 h-1.5">
                    <div className="bg-amber-500 h-full w-[95%]"></div>
                 </div>
              </div>
            </Card>

            <Card className="bg-[#0F172A] text-white border-none shadow-blue-900/10 shadow-2xl">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">M-Pesa Wallet</h4>
              <div className="text-4xl font-black tracking-tighter">KES 42,800</div>
              <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-[0.2em]">Held in Escrow: KES 12,500</p>
              <button className="mt-8 w-full py-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all">Withdraw Payout</button>
            </Card>
          </aside>

          <section className="flex-grow space-y-10">
            <div>
              <SectionHeader title="Digital License Wallet" subtitle="Live engagements tracking where your EPRA credentials are active." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { contractor: 'BuildKE Limited', job: 'Westlands Solar Substation', status: 'Engaged', expiry: '7 Days Left' },
                  { contractor: 'PowerGen Systems', job: 'Mombasa Residential PV', status: 'Engaged', expiry: '22 Days Left' }
                ].map((eng, idx) => (
                  <Card key={idx} className="border-l-4 border-l-emerald-500">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">License Status: Active</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{eng.expiry}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1 font-heading">{eng.job}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{eng.contractor}</p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:underline">View Digital Agreement</button>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Matched Jobs" subtitle="Professional opportunities reserved for your license class." />
              <div className="space-y-4">
                {[
                  { title: 'Full House Wiring (Muthaiga)', rate: 'KES 8,500/Day', loc: 'Nairobi', type: 'One-off' },
                  { title: 'Substation O&M (Industrial)', rate: 'KES 155,000', loc: 'Athi River', type: 'Monthly' }
                ].map((job, idx) => (
                  <Card key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                    <div>
                      <h4 className="text-lg font-bold font-heading">{job.title}</h4>
                      <div className="flex gap-4 mt-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span className="text-blue-600">{job.loc}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm font-black text-[#0F172A]">{job.rate}</div>
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Escrow Ready</div>
                      </div>
                      <button className="px-6 py-3 bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-widest">Apply</button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (role === 'contractor') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-80 space-y-6">
            <Card className="text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-sm">
                <svg className="w-12 h-12 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" /></svg>
              </div>
              <h3 className="font-bold text-xl text-[#0F172A] font-heading">BuildKE Ltd</h3>
              <div className="mt-3 inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest border border-blue-200">
                Verified Contractor
              </div>
              <div className="mt-6">
                <button className="w-full py-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg">Post a Project</button>
              </div>
            </Card>

            <Card className="bg-[#0F172A] text-white">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Escrow Deposits</h4>
              <div className="text-3xl font-black">KES 850,000</div>
              <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest">Active Engagements: 3</p>
            </Card>
          </aside>

          <section className="flex-grow space-y-10">
            <div>
              <SectionHeader title="Active Projects" subtitle="Managing your current licensed engineering workforce." />
              <div className="space-y-4">
                {[
                  { title: 'Westlands Solar Substation', pro: 'Eng. S. Otieno (Class T3)', status: 'In Progress', budget: 'KES 150,000' },
                  { title: 'Industrial Lighting Retrofit', pro: 'H. Mutua (Class B)', status: 'Pending Approval', budget: 'KES 45,000' }
                ].map((job, idx) => (
                  <Card key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h4 className="text-lg font-bold font-heading">{job.title}</h4>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">Hired: {job.pro}</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="text-sm font-black text-[#0F172A]">{job.budget}</div>
                        <div className={`text-[8px] font-black uppercase tracking-widest ${job.status === 'In Progress' ? 'text-emerald-500' : 'text-amber-500'}`}>{job.status}</div>
                      </div>
                      <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0F172A]">Manage</button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Verification Queue" subtitle="Professionals matched for your open requirements." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map(i => (
                  <Card key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                       <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Tech Candidate #GR-{1040+i}</div>
                      <div className="text-[10px] font-black text-emerald-500 uppercase">Class A-1 Verified</div>
                    </div>
                    <button className="ml-auto text-blue-600 text-[10px] font-black uppercase tracking-widest">Hire</button>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (role === 'admin') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeader title="System Oversight" subtitle="Compliance dashboard for verification and market health." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Pending License Verifications (14)</h3>
              <div className="divide-y divide-slate-100">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-slate-400">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold">Registration #GR-{2000+i}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Class B • Machakos</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50">Review Docs</button>
                      <button className="px-4 py-2 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest">Approve</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Dispute Logs</h3>
              <div className="p-12 text-center bg-slate-50 border border-dashed border-slate-200">
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">No active disputes requiring intervention</p>
              </div>
            </Card>
          </div>

          <aside className="space-y-8">
            <Card className="bg-[#0F172A] text-white">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">Market Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Marketplace Escrow</div>
                  <div className="text-2xl font-black">KES 4.2M</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Weekly Growth</div>
                  <div className="text-xl font-black text-emerald-500">+12%</div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Pricing Standard Controls</h3>
              <div className="space-y-4">
                {[
                  { class: 'Class A-1', floor: '15,000' },
                  { class: 'Class B', floor: '8,500' },
                  { class: 'Solar T3', floor: '12,000' }
                ].map(r => (
                  <div key={r.class} className="flex justify-between items-center text-xs">
                    <span className="font-bold">{r.class}</span>
                    <span className="font-black text-slate-400">KES {r.floor}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-3 border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50">Update Rates</button>
            </Card>
          </aside>
        </div>
      </div>
    );
  }

  return <div className="py-24 text-center">Dashboard for {role} role is initializing...</div>;
};

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>('guest');
  const [page, setPage] = useState<string>('home');

  const renderContent = () => {
    switch (page) {
      case 'dashboard': return <Dashboard role={role} onNavigate={setPage} />;
      case 'pricing': return <PricingPage />;
      case 'how-it-works': return <HowItWorks />;
      case 'trust': return <TrustProtection />;
      case 'faqs': return <FAQs />;
      case 'contact': return <ContactPage />;
      case 'legal': return <LegalPage />;
      case 'register': return <UserRegistration role={role} onComplete={() => setPage('dashboard')} />;
      case 'home':
      default: return <Home onJoin={(r) => { setRole(r); setPage('register'); }} />;
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
      
      {/* Global EPRA Disclaimer */}
      <div className="bg-white py-20 px-4 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-4">
             <div className="w-12 h-1 bg-amber-500"></div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Regulatory Disclaimer</p>
          <p className="text-lg text-slate-500 italic font-medium leading-relaxed">
            “THE GRID is an independent platform for EPRA-licensed professionals. We operate as a private technical marketplace and are not owned, managed, or funded by the Energy and Petroleum Regulatory Authority (EPRA).”
          </p>
        </div>
      </div>
    </Layout>
  );
};

const PricingPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-24">
    <SectionHeader 
      title="Fair Market Rates" 
      subtitle="Standardized pricing floors to protect technicians and ensure contractors get top-tier engineering quality." 
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { class: 'Class A-1', rate: 'KES 15,000+', desc: 'Complex industrial and commercial high-voltage systems.', risk: 'High' },
        { class: 'Class B', rate: 'KES 8,500+', desc: 'Standard residential wiring and small commercial maintenance.', risk: 'Medium' },
        { class: 'Solar T3', rate: 'KES 12,000+', desc: 'Advanced grid-tie, hybrid, and industrial PV installations.', risk: 'High' },
        { class: 'Class C1/C2', rate: 'KES 5,000+', desc: 'Small-scale domestic inspections and remedial work.', risk: 'Low' },
        { class: 'Solar T1/T2', rate: 'KES 7,500+', desc: 'Standard residential PV and solar water heating.', risk: 'Medium' },
      ].map((p, i) => (
        <Card key={i} className="flex flex-col h-full border-t-4 border-t-blue-600">
          <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{p.class} Professional</div>
          <div className="text-4xl font-black text-[#0F172A] mb-4 tracking-tighter font-heading">{p.rate}<span className="text-slate-400 text-sm font-normal"> /day</span></div>
          <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">{p.desc}</p>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest">
            <span>Risk Index: {p.risk}</span>
            <span className="text-emerald-500">Regulated</span>
          </div>
        </Card>
      ))}
    </div>
    <div className="mt-16 p-8 bg-slate-50 border border-slate-200 text-slate-500 text-sm italic text-center rounded-sm">
      * All rates are minimum floors. Negotiated rates can be higher based on project complexity and duration.
    </div>
  </div>
);

const HowItWorks = () => (
  <div className="max-w-6xl mx-auto px-4 py-24">
    <SectionHeader title="The Digital Path to Compliance" centered />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
      {[
        { step: '01', title: 'Verify Your License', desc: 'Professionals upload their EPRA credentials. Our backend cross-references the license with active regulatory databases.' },
        { step: '02', title: 'Smart Matching', desc: 'Contractors post structured jobs specifying the required class (e.g. Class B). Only qualified pros see the opportunity.' },
        { step: '03', title: 'Escrow Lock', desc: 'The project budget is deposited into THE GRID. Both parties sign a digital agreement that protects the timeline and scope.' },
        { step: '04', title: 'Instant Release', desc: 'Upon completion, M-Pesa release is automated. Technicians get paid immediately, and contractors get their project closed.' }
      ].map((s, i) => (
        <div key={i} className="relative">
          <div className="text-9xl font-black text-slate-100/50 absolute -top-12 -left-4 select-none z-0">0{i+1}</div>
          <div className="relative z-10 pl-4 border-l-2 border-amber-500 mt-4">
            <h3 className="text-2xl font-bold mb-4 text-[#0F172A] font-heading">{s.title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="max-w-5xl mx-auto px-4 py-24">
    <SectionHeader 
      title="Contact Support" 
      subtitle="Reach our compliance and technical teams for license verification assistance or payment queries." 
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="space-y-8">
        {[
          { title: 'Technician Support', detail: 'Verification, Wallet & Payouts' },
          { title: 'Contractor Relations', detail: 'Hiring, Escrow & Compliance' },
          { title: 'Institutional Inquiries', detail: 'Regulators & Power Entities' }
        ].map(item => (
          <div key={item.title}>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#0F172A] mb-1">{item.title}</h4>
            <p className="text-sm text-slate-500">{item.detail}</p>
          </div>
        ))}
      </div>
      <Card className="lg:col-span-2">
        <form action={FORMSPREE_URL} method="POST" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name</label>
              <input required type="text" name="name" className="w-full px-4 py-4 border-b border-slate-200 focus:border-blue-500 outline-none bg-transparent" placeholder="e.g. Stephen Otieno" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email</label>
              <input required type="email" name="email" className="w-full px-4 py-4 border-b border-slate-200 focus:border-blue-500 outline-none bg-transparent" placeholder="stephen@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
            <textarea required name="message" rows={6} className="w-full px-4 py-4 border border-slate-200 focus:border-blue-500 outline-none bg-slate-50 resize-none" placeholder="How can our team help you?"></textarea>
          </div>
          <button type="submit" className="w-full py-5 bg-[#0F172A] text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl">
            Submit Inquiry
          </button>
        </form>
      </Card>
    </div>
  </div>
);

export default App;
