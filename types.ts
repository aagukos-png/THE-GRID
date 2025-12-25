
export type UserRole = 'technician' | 'contractor' | 'admin' | 'guest';

export type LicenseClass = 'A-1' | 'B' | 'C1' | 'C2' | 'T1' | 'T2' | 'T3' | 'v1' | 'V2';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  licenseClass?: LicenseClass;
  epraNumber?: string;
  location?: string;
  isVerified: boolean;
  avatar?: string;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requiredClass: LicenseClass;
  location: string;
  budget: number;
  duration: string;
  status: 'open' | 'active' | 'completed' | 'cancelled';
  contractorId: string;
  technicianId?: string;
  postedAt: Date;
}

export interface ImageState {
  original: string | null;
  transformed: string | null;
  mimeType: string | null;
}

export interface ProcessingStatus {
  loading: boolean;
  error: string | null;
  status: string;
}
