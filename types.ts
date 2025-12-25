
export type UserRole = 'technician' | 'contractor' | 'admin' | 'guest';
export type LicenseClass = 'A-1' | 'B' | 'C1' | 'C2' | 'T1' | 'T2' | 'T3' | 'v1' | 'V2';
export type EntityStatus = 'pending' | 'verified' | 'suspended' | 'active';
export type JobStatus = 'posted' | 'matched' | 'active' | 'completed' | 'disputed';
export type EscrowStatus = 'held' | 'released' | 'refunded';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  status: EntityStatus;
  email: string;
  phone: string;
  location: string;
  rating: number;
  registrationDate: Date;
}

export interface TechnicianProfile extends User {
  type: 'electrician' | 'solar';
  licenseClass: LicenseClass;
  licenseNumber: string;
  availability: boolean;
  engagementPreference: 'one-off' | 'monthly';
  minRate: number;
  walletBalance: number;
  jobsCompleted: number;
  incomeToDate: number;
}

export interface ContractorProfile extends User {
  companyName: string;
  contractorType: 'electrical' | 'solar';
  companyLicense: string;
  companyClass: LicenseClass;
  activeJobs: number;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requiredClass: LicenseClass;
  jobType: 'install' | 'inspection' | 'o&m' | 'commissioning';
  location: string;
  budget: number;
  duration: string;
  status: JobStatus;
  contractorId: string;
  technicianId?: string;
  postedAt: Date;
}

export interface Agreement {
  id: string;
  jobId: string;
  contractorId: string;
  technicianId: string;
  signedAt: Date;
  rate: number;
  terms: string;
  duration: string;
}

export interface Payment {
  id: string;
  jobId: string;
  amount: number;
  platformFee: number;
  status: EscrowStatus;
  date: Date;
}

export interface PricingRule {
  id: string;
  licenseClass: LicenseClass;
  minDailyRate: number;
  minMonthlyRate: number;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface LicenseLog {
  id: string;
  technicianId: string;
  contractorId: string;
  jobId: string;
  licenseClass: LicenseClass;
  startTime: Date;
  endTime?: Date;
  status: 'active' | 'expired';
}

export interface Dispute {
  id: string;
  jobId: string;
  raisedBy: string;
  type: string;
  description: string;
  status: 'pending' | 'resolved';
}
