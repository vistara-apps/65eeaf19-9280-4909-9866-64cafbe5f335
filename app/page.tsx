'use client';

import { useState } from 'react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Name, Identity } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';
import { useBets } from './hooks/useBets';
import { BetFeedItem } from './components/BetFeedItem';
import { CreateBetButton } from './components/CreateBetButton';
import { CreateBetModal } from './components/CreateBetModal';
import { StatsCard } from './components/StatsCard';
import { Trophy, TrendingUp, Users, Zap } from 'lucide-react';

export default function Home() {
  const { address, isConnected } = useAccount();
  const { bets, matches, loading, createBet, joinBet } = useBets();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleJoinBet = async (betId: string) => {
    if (!address) return;
    try {
      await joinBet(betId, address);
    } catch (error) {
      console.error('Error joining bet:', error);
    }
  };

  const handleCreateBet = async (betData: any) => {
    await createBet(betData);
  };

  const activeBets = bets.filter(bet => bet.status === 'active').length;
  const pendingBets = bets.filter(bet => bet.status === 'pending').length;
  const settledBets = bets.filter(bet => bet.status === 'settled').length;
  const totalVolume = bets.reduce((sum, bet) => sum + parseFloat(bet.stake || '0'), 0);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-display gradient-primary bg-clip-text text-transparent mb-4">
            BetBase
          </h1>
          <p className="text-body text-gray-300 mb-8 max-w-2xl mx-auto">
            A football peer-to-peer betting app built for Base Wallet users. Easy bet creation and discovery using Base.
          </p>
          
          {!isConnected ? (
            <ConnectWallet />
          ) : (
            <div className="flex items-center justify-center gap-4 mb-6">
              <Identity address={address} className="glass-card p-3 rounded-lg">
                <Name address={address} />
              </Identity>
            </div>
          )}
        </header>

        {isConnected && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Active Bets"
                value={activeBets.toString()}
                icon={<Zap className="w-6 h-6" />}
                trend="neutral"
              />
              <StatsCard
                title="Pending Bets"
                value={pendingBets.toString()}
                icon={<Users className="w-6 h-6" />}
                trend="neutral"
              />
              <StatsCard
                title="Total Volume"
                value={`${totalVolume.toFixed(2)} ETH`}
                icon={<TrendingUp className="w-6 h-6" />}
                trend="up"
              />
              <StatsCard
                title="Settled"
                value={settledBets.toString()}
                icon={<Trophy className="w-6 h-6" />}
                trend="neutral"
              />
            </div>

            {/* Create Bet Section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-heading text-white mb-2">Football Bets</h2>
                <p className="text-gray-400">Create or join peer-to-peer bets</p>
              </div>
              <CreateBetButton onClick={() => setShowCreateModal(true)} />
            </div>

            {/* Bet Feed */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-12">
                  <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-400">Loading bets...</p>
                </div>
              ) : bets.length === 0 ? (
                <div className="text-center py-12">
                  <Trophy className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No bets yet</h3>
                  <p className="text-gray-400 mb-4">Be the first to create a bet!</p>
                  <CreateBetButton onClick={() => setShowCreateModal(true)} />
                </div>
              ) : (
                bets.map((bet) => (
                  <BetFeedItem
                    key={bet.betId}
                    bet={bet}
                    onJoin={handleJoinBet}
                  />
                ))
              )}
            </div>

            {/* Create Bet Modal */}
            <CreateBetModal
              isOpen={showCreateModal}
              onClose={() => setShowCreateModal(false)}
              matches={matches}
              onCreateBet={handleCreateBet}
              userAddress={address}
            />
          </>
        )}
      </div>
    </div>
  );
}
