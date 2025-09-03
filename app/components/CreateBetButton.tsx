'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface CreateBetButtonProps {
  variant?: 'primary';
  onClick?: () => void;
}

export function CreateBetButton({ variant = 'primary', onClick }: CreateBetButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-glow transition-all duration-200 z-10"
    >
      <Plus className="w-6 h-6" />
    </motion.button>
  );
}
