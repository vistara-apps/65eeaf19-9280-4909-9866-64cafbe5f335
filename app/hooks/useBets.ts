'use client';

import { useState, useEffect } from 'react';
import { Bet, Match } from '../types/bet';

// Mock data for demonstration
const mockMatches: Match[] = [
  {
    matchId: '1',
    teamA: 'Manchester United',
    teamB: 'Liverpool',
    startTime: new Date(Date.now() + 86400000), // Tomorrow
    status: 'scheduled',
  },
  {
    matchId: '2',
    teamA: 'Barcelona',
    teamB: 'Real Madrid',
    startTime: new Date(Date.now() + 172800000), // Day after tomorrow
    status: 'scheduled',
  },
  {
    matchId: '3',
    teamA: 'Chelsea',
    teamB: 'Arsenal',
    startTime: new Date(Date.now() - 3600000), // 1 hour ago
    status: 'in_progress',
  },
];

const mockBets: Bet[] = [
  {
    betId: '1',
    creatorId: '0x1234...5678',
    matchId: '1',
    outcome: 'Manchester United to win',
    stake: 0.1,
    status: 'pending',
    createdAt: new Date(Date.now() - 3600000),
    match: mockMatches[0],
    joinedUsers: [],
  },
  {
    betId: '2',
    creatorId: '0xabcd...efgh',
    matchId: '2',
    outcome: 'Over 2.5 goals',
    stake: 0.05,
    status: 'pending',
    createdAt: new Date(Date.now() - 7200000),
    match: mockMatches[1],
    joinedUsers: ['0x9999...1111'],
  },
  {
    betId: '3',
    creatorId: '0x5555...6666',
    matchId: '3',
    outcome: 'Chelsea to win',
    stake: 0.2,
    status: 'active',
    createdAt: new Date(Date.now() - 14400000),
    match: mockMatches[2],
    joinedUsers: ['0x7777...8888', '0x3333...4444'],
  },
];

export function useBets() {
  const [bets, setBets] = useState<Bet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setBets(mockBets);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const createBet = (betData: Omit<Bet, 'betId' | 'createdAt' | 'status'>) => {
    const newBet: Bet = {
      ...betData,
      betId: Date.now().toString(),
      createdAt: new Date(),
      status: 'pending',
    };
    setBets(prev => [newBet, ...prev]);
    return newBet;
  };

  const joinBet = (betId: string, userId: string) => {
    setBets(prev => prev.map(bet => {
      if (bet.betId === betId) {
        return {
          ...bet,
          status: 'active' as const,
          joinedUsers: [...(bet.joinedUsers || []), userId],
        };
      }
      return bet;
    }));
  };

  const getStats = () => {
    const totalBets = bets.length;
    const activeBets = bets.filter(bet => bet.status === 'active').length;
    const totalVolume = bets.reduce((sum, bet) => sum + bet.stake, 0);
    const winRate = Math.round(Math.random() * 30 + 55); // Mock win rate

    return {
      totalBets,
      activeBets,
      totalVolume,
      winRate,
    };
  };

  return {
    bets,
    loading,
    createBet,
    joinBet,
    getStats,
  };
}
