export interface User {
  userId: string; // wallet address
  username?: string;
  creationDate: Date;
}

export interface Match {
  matchId: string;
  teamA: string;
  teamB: string;
  startTime: Date;
  status: 'scheduled' | 'in_progress' | 'finished';
}

export interface Bet {
  betId: string;
  creatorId: string;
  matchId: string;
  outcome: string;
  stake: string; // ETH amount
  status: 'pending' | 'active' | 'settled';
  createdAt: Date;
  settledAt?: Date;
  joinerId?: string;
  winner?: string;
  match?: Match;
  creator?: User;
}

export type BetStatus = 'pending' | 'active' | 'settled';
export type MatchStatus = 'scheduled' | 'in_progress' | 'finished';
