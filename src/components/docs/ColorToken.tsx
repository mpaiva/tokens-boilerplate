import React from 'react';
import { TokenDescription } from './TokenDescription';
import { tokenDescriptions } from '@/tokens/descriptions';

interface ColorTokenProps {
  name: string;
  value: string;
  category: string;
}

export const ColorToken = ({ name, value, category }: ColorTokenProps) => {
  const getDescription = () => {
    if (category === 'Primary') {
      return tokenDescriptions.colors.theme.light.primary[name];
    }
    if (category === 'Neutral') {
      return tokenDescriptions.colors.core.neutral[name];
    }
    return undefined;
  };

  const description = getDescription();

  return (
    <div className="group relative">
      <div 
        className="h-16 w-full rounded-lg border shadow-sm transition-transform hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500"
        style={{ backgroundColor: value }}
        role="img"
        aria-label={`Color ${name} with value ${value}`}
        tabIndex={0}
      />
      <div className="mt-2">
        <p className="font-medium text-gray-900">{category} {name}</p>
        <p className="text-sm text-gray-600">{value}</p>
        {description && <TokenDescription description={description} />}
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg flex items-center justify-center">
        <button 
          onClick={() => navigator.clipboard.writeText(value)}
          className="bg-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50"
          aria-label={`Copy color value ${value}`}
        >
          Copy value
        </button>
      </div>
    </div>
  );
};