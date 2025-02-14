import React from 'react';
import { Zap } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Zap className="w-8 h-8 text-blue-600" />
      <span className="text-xl font-bold">SmartMeter</span>
    </div>
  );
};