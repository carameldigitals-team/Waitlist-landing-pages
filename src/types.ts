export interface IncomeProfile {
  id: string;
  title: string;
  shortDesc: string;
  symptoms: string[];
  hiddenCost: string;
  nextStep: string;
  scoreRange: string;
  badge: string;
}

export interface WaitlistStats {
  spotsClaimed: number;
  totalSpots: number;
  memberCount: number;
  launchDate: string; // ISO string
}
