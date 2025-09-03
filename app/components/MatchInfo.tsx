'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Match } from '../types/bet';

interface MatchInfoProps {
  match: Match;
  withTime?: boolean;
}

export function MatchInfo({ match, withTime = true }: MatchInfoProps) {
  const getStatusColor = () => {
    switch (match.status) {
      case 'in_progress':
        return 'text-green-400';
      case 'finished':
        return 'text-gray-400';
      default:
        return 'text-purple-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-effect rounded-lg p-4 border border-white/10"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">
          {match.teamA} vs {match.teamB}
        </h3>
        <span className={`text-sm font-medium capitalize ${getStatusColor()}`}>
          {match.status.replace('_', ' ')}
        </span>
      </div>
      
      {withTime && (
        <div className="flex items-center gap-2 text-white/60">
          <Clock className="w-4 h-4" />
          <span className="text-sm">
            {new Date(match.startTime).toLocaleString()}
          </span>
        </div>
      )}
    </motion.div>
  );
}
