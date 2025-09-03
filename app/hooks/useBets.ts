'use client';

import { useState, useEffect } from 'react';
import { Bet, Match } from '../types';

// Mock data for demonstration
const mockMatches: Match[] = [
  {
    matchId: '1',
    teamA: 'Manchester United',
    teamB: 'Liverpool',
    startTime: new Date(Date.now() + 86400000), // Tomorrow
    status: 'scheduled'
  },
  {
    matchId: '2', 
    teamA: 'Barcelona',
    teamB: 'Real Madrid',
    startTime: new Date(Date.now() + 172800000), // Day after tomorrow
    status: 'scheduled'
  },
  {
    matchId: '3',
    teamA: 'Chelsea',
    teamB: 'Arsenal',
    startTime: new Date(Date.now() + 259200000), // 3 days from now
    status: 'scheduled'
  }
];

const mockBets: Bet[] = [
  {
    betId: '1',
    creatorId: '0x1234...5678',
    matchId: '1',
    outcome: 'Manchester United wins',
    stake: '0.1',
    status: 'pending',
    createdAt: new Date(),
    match: mockMatches[0]
  },
  {
    betId: '2',
    creatorId: '0x9876...5432',
    matchId: '2',
    outcome: 'Barcelona wins',
    stake: '0.05',
    status: 'active',
    createdAt: new Date(),
    joinerId: '0x1111...2222',
    match: mockMatches[1]
  },
  {
    betId: '3',
    creatorId: '0xabcd...efgh',
    matchId: '1',
    outcome: 'Liverpool wins',
    stake: '0.2',
    status: 'pending',
    createdAt: new Date(),
    match: mockMatches[0]
  }
];

export function useBets() {
  const [bets, setBets] = useState<Bet[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBets(mockBets);
      setMatches(mockMatches);
      setLoading(false);
    }, 1000);
  }, []);

  const createBet = async (betData: Omit<Bet, 'betId' | 'createdAt' | 'status'>) => {
    const newBet: Bet = {
      ...betData,
      betId: Date.now().toString(),
      createdAt: new Date(),
      status: 'pending'
    };
    
    setBets(prev => [newBet, ...prev]);
    return newBet;
  };

  const joinBet = async (betId: string, joinerId: string) => {
    setBets(prev => prev.map(bet => 
      bet.betId === betId 
        ? { ...bet, joinerId, status: 'active' as const }
        : bet
    ));
  };

  const settleBet = async (betId: string, winner: string) => {
    setBets(prev => prev.map(bet =>
      bet.betId === betId
        ? { ...bet, winner, status: 'settled' as const, settledAt: new Date() }
        : bet
    ));
  };

  return {
    bets,
    matches,
    loading,
    createBet,
    joinBet,
    settleBet
  };
}
