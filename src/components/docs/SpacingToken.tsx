import React from 'react';
import { TokenDescription } from './TokenDescription';
import { tokenDescriptions } from '@/tokens/descriptions';

interface SpacingTokenProps {
  name: string;
  value: string;
}

export const SpacingToken = ({ name, value }: SpacingTokenProps) => {
  const description = tokenDescriptions.spacing[name];

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-32 flex-shrink-0">
        <p className="font-medium text-gray-900">Space {name}</p>
        <p className="text-sm text-gray-600">{value}</p>
        {description && <TokenDescription description={description} />}
      </div>
      <div 
        className="bg-blue-200 rounded"
        style={{ width: value, height: '24px' }}
        role="img"
        aria-label={`Spacing example of size ${value}`}
      />
    </div>
  );
};