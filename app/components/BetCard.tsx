'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Zap } from 'lucide-react';
import { Bet, BetCardVariant } from '../types/bet';

interface BetCardProps {
  bet: Bet;
  variant: BetCardVariant;
  onJoin?: () => void;
}

export function BetCard({ bet, variant, onJoin }: BetCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'active':
        return 'border-green-500/30 bg-green-500/10';
      case 'pending':
        return 'border-purple-500/30 bg-purple-500/10';
      case 'settled':
        return 'border-gray-500/30 bg-gray-500/10';
      default:
        return 'border-purple-500/30 bg-purple-500/10';
    }
  };

  const getStatusIcon = () => {
    switch (variant) {
      case 'active':
        return <Zap className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-purple-400" />;
      case 'settled':
        return <Trophy className="w-4 h-4 text-gray-400" />;
      default:
        return <Clock className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`glass-effect rounded-lg p-4 border transition-all duration-200 ${getVariantStyles()}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <span className="text-sm font-medium capitalize text-white/80">
            {variant}
          </span>
        </div>
        <div className="flex items-center gap-1 text-white/60">
          <Users className="w-3 h-3" />
          <span className="text-xs">{bet.joinedUsers?.length || 0}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-white">
            {bet.match?.teamA} vs {bet.match?.teamB}
          </h3>
          <span className="text-lg font-bold text-purple-400">
            {bet.stake} ETH
          </span>
        </div>
        
        <p className="text-sm text-white/70">
          Betting on: {bet.outcome}
        </p>
        
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>
            {bet.match?.startTime ? new Date(bet.match.startTime).toLocaleString() : 'TBD'}
          </span>
          <span>
            Created {new Date(bet.createdAt).toLocaleDateString()}
          </span>
        </div>
        
        {variant === 'pending' && onJoin && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onJoin}
            className="w-full mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md font-medium text-sm hover:shadow-glow transition-all duration-200"
          >
            Join Bet
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
