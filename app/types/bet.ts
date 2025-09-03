export interface User {
  userId: string;
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
  stake: number;
  status: 'pending' | 'active' | 'settled';
  createdAt: Date;
  settledAt?: Date;
  joinedUsers?: string[];
  match?: Match;
}

export type BetCardVariant = 'active' | 'pending' | 'settled';
