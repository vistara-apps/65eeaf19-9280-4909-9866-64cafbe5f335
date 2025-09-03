'use client';

import { motion } from 'framer-motion';
import { Bet } from '../types/bet';
import { BetCard } from './BetCard';

interface BetFeedItemProps {
  bet: Bet;
  withStatus?: boolean;
  onJoin?: () => void;
}

export function BetFeedItem({ bet, withStatus = true, onJoin }: BetFeedItemProps) {
  const getVariant = () => {
    if (bet.status === 'settled') return 'settled';
    if (bet.status === 'active') return 'active';
    return 'pending';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-4"
    >
      <BetCard
        bet={bet}
        variant={getVariant()}
        onJoin={onJoin}
      />
    </motion.div>
  );
}
