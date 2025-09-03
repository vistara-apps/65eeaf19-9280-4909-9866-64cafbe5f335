'use client';

import { motion } from 'framer-motion';
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Trophy } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 glass-effect border-b border-white/10 px-4 py-3"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold gradient-text">BetBase</h1>
        </div>
        
        <Wallet>
          <ConnectWallet />
        </Wallet>
      </div>
    </motion.header>
  );
}
