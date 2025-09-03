'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
  gradient?: string;
}

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  gradient = 'from-purple-500 to-pink-500' 
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="glass-effect rounded-lg p-6 border border-white/10 relative overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white/80 text-sm font-medium">{title}</h3>
          {icon && <div className="text-white/60">{icon}</div>}
        </div>
        
        <div className="space-y-1">
          <div className="text-2xl font-bold text-white">{value}</div>
          {subtitle && (
            <div className="text-sm text-white/50">{subtitle}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
