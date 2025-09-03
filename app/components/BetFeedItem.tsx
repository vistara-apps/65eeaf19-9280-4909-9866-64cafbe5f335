'use client';

import { Bet } from '../types';
import { BetCard } from './BetCard';

interface BetFeedItemProps {
  bet: Bet;
  variant?: 'withStatus';
  onJoin?: (betId: string) => void;
}

export function BetFeedItem({ bet, variant = 'withStatus', onJoin }: BetFeedItemProps) {
  return (
    <div className="mb-4 animate-slide-up">
      <BetCard 
        bet={bet} 
        variant={bet.status}
        onJoin={onJoin}
        showJoinButton={bet.status === 'pending'}
      />
    </div>
  );
}
