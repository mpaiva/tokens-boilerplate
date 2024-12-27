import React from 'react';
import { TokenDescription } from './TokenDescription';
import { tokenDescriptions } from '@/tokens/descriptions';

interface EffectTokenProps {
  name: string;
  value: string;
}

export const EffectToken = ({ name, value }: EffectTokenProps) => {
  const description = tokenDescriptions.effects.shadow[name];

  return (
    <div className="space-y-2">
      <div 
        className="h-24 w-full rounded-lg bg-white transition-transform hover:scale-105"
        style={{ boxShadow: value }}
        role="img"
        aria-label={`Shadow example of type ${name}`}
      />
      <div>
        <p className="font-medium text-gray-900">Shadow {name}</p>
        <p className="text-sm text-gray-600 break-words">{value}</p>
        {description && <TokenDescription description={description} />}
      </div>
    </div>
  );
};