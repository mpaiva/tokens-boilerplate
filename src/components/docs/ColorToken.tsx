import React from 'react';
import { useDesignToken } from '../../hooks/useDesignToken';
import type { TokenName } from '../../hooks/useDesignToken';

interface ColorTokenProps {
  name: TokenName;
  value: string;
}

export const ColorToken: React.FC<ColorTokenProps> = ({ name, value }) => {
  const tokenValue = useDesignToken(name);
  
  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        borderColor: useDesignToken('color-core-neutral-200'),
        borderWidth: '1px'
      }}
    >
      <div 
        className="w-full h-16 rounded-md mb-3"
        style={{ backgroundColor: tokenValue }}
      />
      <div className="space-y-1">
        <p className="font-medium text-sm">{name}</p>
        <p 
          className="text-sm"
          style={{ color: useDesignToken('color-core-neutral-500') }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};