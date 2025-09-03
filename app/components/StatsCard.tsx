'use client';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export function StatsCard({ title, value, subtitle, trend = 'neutral', icon }: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="glass-card p-6 gradient-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-400 mb-1">{title}</h3>
          <div className="text-2xl font-bold text-white mb-1">{value}</div>
          {subtitle && (
            <p className={`text-sm ${getTrendColor()}`}>{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="text-purple-400 opacity-80">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
