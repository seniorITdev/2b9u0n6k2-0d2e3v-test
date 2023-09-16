export interface Expense {
  name: string;
  amount: number;
  status: string;
  editStatus?: string;
  deleteStatus?: string;
}

export interface Payout {
  owes: string;
  owed: string;
  amount: number;
}

export interface PayoutResponse {
  total: number;
  equalShare: number;
  payouts: Payout[];
}
