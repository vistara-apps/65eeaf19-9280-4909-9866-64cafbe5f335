'use client';

import { Match } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface MatchInfoProps {
  match: Match;
  variant?: 'withTime';
}

export function MatchInfo({ match, variant = 'withTime' }: MatchInfoProps) {
  const getStatusColor = () => {
    switch (match.status) {
      case 'in_progress': return 'text-green-400';
      case 'finished': return 'text-gray-400';
      case 'scheduled': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="glass-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold text-white">
          {match.teamA} vs {match.teamB}
        </h4>
        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor()} bg-current/10`}>
          {match.status.replace('_', ' ')}
        </span>
      </div>

      {variant === 'withTime' && (
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{match.startTime.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{match.startTime.toLocaleTimeString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
