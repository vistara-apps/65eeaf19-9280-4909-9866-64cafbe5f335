'use client';

import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Match, Bet } from '../types';

interface CreateBetModalProps {
  isOpen: boolean;
  onClose: () => void;
  matches: Match[];
  onCreateBet: (betData: Omit<Bet, 'betId' | 'createdAt' | 'status'>) => Promise<void>;
  userAddress?: string;
}

export function CreateBetModal({ isOpen, onClose, matches, onCreateBet, userAddress }: CreateBetModalProps) {
  const [selectedMatch, setSelectedMatch] = useState('');
  const [outcome, setOutcome] = useState('');
  const [stake, setStake] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMatch || !outcome || !stake || !userAddress) return;

    setLoading(true);
    try {
      await onCreateBet({
        creatorId: userAddress,
        matchId: selectedMatch,
        outcome,
        stake,
      });
      
      // Reset form
      setSelectedMatch('');
      setOutcome('');
      setStake('');
      onClose();
    } catch (error) {
      console.error('Error creating bet:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedMatchData = matches.find(m => m.matchId === selectedMatch);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card p-6 max-w-md w-full mx-4 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-heading text-white">Create New Bet</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Match
            </label>
            <select
              value={selectedMatch}
              onChange={(e) => setSelectedMatch(e.target.value)}
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              required
            >
              <option value="">Choose a match...</option>
              {matches.map((match) => (
                <option key={match.matchId} value={match.matchId} className="bg-gray-800">
                  {match.teamA} vs {match.teamB}
                </option>
              ))}
            </select>
          </div>

          {selectedMatchData && (
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-400">
                {selectedMatchData.startTime.toLocaleDateString()} at {selectedMatchData.startTime.toLocaleTimeString()}
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Prediction
            </label>
            <input
              type="text"
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
              placeholder="e.g., Manchester United wins"
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Stake Amount (ETH)
            </label>
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              placeholder="0.1"
              step="0.001"
              min="0"
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600/20 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !selectedMatch || !outcome || !stake}
              className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  Create Bet
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
