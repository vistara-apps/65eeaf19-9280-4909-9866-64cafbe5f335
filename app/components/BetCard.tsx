'use client';

import { Bet } from '../types';
import { Clock, User, Trophy, Zap } from 'lucide-react';

interface BetCardProps {
  bet: Bet;
  variant?: 'active' | 'pending' | 'settled';
  onJoin?: (betId: string) => void;
  showJoinButton?: boolean;
}

export function BetCard({ bet, variant = 'pending', onJoin, showJoinButton = false }: BetCardProps) {
  const getStatusColor = () => {
    switch (bet.status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'settled': return 'text-gray-400 bg-gray-400/10';
      case 'pending': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-purple-400 bg-purple-400/10';
    }
  };

  const getStatusIcon = () => {
    switch (bet.status) {
      case 'active': return <Zap className="w-3 h-3" />;
      case 'settled': return <Trophy className="w-3 h-3" />;
      case 'pending': return <Clock className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="glass-card p-6 hover:bg-white/10 transition-all duration-200 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-heading text-white mb-2">
            {bet.match?.teamA} vs {bet.match?.teamB}
          </h3>
          <p className="text-body text-gray-300 mb-3">{bet.outcome}</p>
        </div>
        <div className={`px-3 py-1 rounded-full flex items-center gap-2 ${getStatusColor()}`}>
          {getStatusIcon()}
          <span className="text-xs font-medium capitalize">{bet.status}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-400">
          <User className="w-4 h-4" />
          <span className="text-sm">
            {bet.creatorId.slice(0, 6)}...{bet.creatorId.slice(-4)}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{bet.stake} ETH</div>
          <div className="text-sm text-gray-400">Stake</div>
        </div>
      </div>

      {bet.match?.startTime && (
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span className="text-sm">
            {bet.match.startTime.toLocaleDateString()} at {bet.match.startTime.toLocaleTimeString()}
          </span>
        </div>
      )}

      {showJoinButton && bet.status === 'pending' && onJoin && (
        <button
          onClick={() => onJoin(bet.betId)}
          className="w-full btn-secondary mt-4"
        >
          Join Bet - {bet.stake} ETH
        </button>
      )}

      {bet.status === 'settled' && bet.winner && (
        <div className="mt-4 p-3 bg-green-400/10 rounded-lg border border-green-400/20">
          <div className="flex items-center gap-2 text-green-400">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Winner: {bet.winner}</span>
          </div>
        </div>
      )}
    </div>
  );
}
