'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { Header } from './components/Header';
import { FloatingOrbs } from './components/FloatingOrbs';
import { BetFeedItem } from './components/BetFeedItem';
import { CreateBetButton } from './components/CreateBetButton';
import { StatCard } from './components/StatCard';
import { useBets } from './hooks/useBets';

export default function HomePage() {
  const { bets, loading, joinBet, getStats } = useBets();
  const stats = getStats();

  const handleJoinBet = (betId: string) => {
    // In a real app, this would get the user's address
    joinBet(betId, '0xuser...address');
  };

  const handleCreateBet = () => {
    // In a real app, this would open a create bet modal
    console.log('Create bet clicked');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-bg">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-bg">
      <FloatingOrbs />
      <Header />
      
      <main className="relative z-10 px-4 py-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="display gradient-text mb-4">BetBase</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            A football peer-to-peer betting app built for Base Wallet users. 
            Easy bet creation and discovery using Remix.
          </p>
        </motion.section>

        {/* Stats Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <StatCard
            title="Total Bets"
            value={stats.totalBets.toString()}
            subtitle="All time"
            icon={<Target className="w-5 h-5" />}
            gradient="from-purple-500 to-blue-500"
          />
          <StatCard
            title="Active Bets"
            value={stats.activeBets.toString()}
            subtitle="Right now"
            icon={<TrendingUp className="w-5 h-5" />}
            gradient="from-green-500 to-emerald-500"
          />
          <StatCard
            title="Total Volume"
            value={`${stats.totalVolume.toFixed(2)} ETH`}
            subtitle="Wagered"
            icon={<DollarSign className="w-5 h-5" />}
            gradient="from-orange-500 to-red-500"
          />
          <StatCard
            title="Win Rate"
            value={`${stats.winRate}%`}
            subtitle="Success rate"
            icon={<Users className="w-5 h-5" />}
            gradient="from-pink-500 to-purple-500"
          />
        </motion.section>

        {/* Bet Feed */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="heading text-white">Latest Bets</h2>
            <span className="text-sm text-white/60">{bets.length} available</span>
          </div>
          
          <div className="space-y-4 mb-8">
            {bets.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 glass-effect rounded-lg border border-white/10"
              >
                <p className="text-white/70 mb-4">No bets available yet</p>
                <p className="text-white/50 text-sm">Be the first to create one!</p>
              </motion.div>
            ) : (
              bets.map((bet, index) => (
                <motion.div
                  key={bet.betId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BetFeedItem
                    bet={bet}
                    withStatus={true}
                    onJoin={() => handleJoinBet(bet.betId)}
                  />
                </motion.div>
              ))
            )}
          </div>
        </motion.section>

        <CreateBetButton onClick={handleCreateBet} />
      </main>
    </div>
  );
}
