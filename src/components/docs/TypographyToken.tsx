import React from 'react';
import { TokenDescription } from './TokenDescription';
import { tokenDescriptions } from '@/tokens/descriptions';

interface TypographyTokenProps {
  name: string;
  value: string;
  type: 'size' | 'weight';
}

export const TypographyToken = ({ name, value, type }: TypographyTokenProps) => {
  const description = tokenDescriptions.typography[type === 'size' ? 'fontSize' : 'fontWeight'][name];

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-32 flex-shrink-0">
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{value}</p>
        {description && <TokenDescription description={description} />}
      </div>
      <p 
        className="flex-grow"
        style={type === 'size' ? { fontSize: value } : { fontWeight: value }}
      >
        The quick brown fox jumps over the lazy dog
      </p>
    </div>
  );
};