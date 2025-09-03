'use client';

import { UserPlus } from 'lucide-react';

interface JoinBetButtonProps {
  variant?: 'secondary';
  stake: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function JoinBetButton({ variant = 'secondary', stake, onClick, disabled = false }: JoinBetButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <UserPlus className="w-4 h-4" />
      Join - {stake} ETH
    </button>
  );
}
