'use client';

import { Plus } from 'lucide-react';

interface CreateBetButtonProps {
  variant?: 'primary';
  onClick?: () => void;
}

export function CreateBetButton({ variant = 'primary', onClick }: CreateBetButtonProps) {
  return (
    <button
      onClick={onClick}
      className="btn-primary flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
    >
      <Plus className="w-5 h-5" />
      Create Bet
    </button>
  );
}
