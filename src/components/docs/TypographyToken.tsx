import React from 'react';
import { useDesignToken } from '../../hooks/useDesignToken';
import type { TokenName } from '../../hooks/useDesignToken';

interface TypographyTokenProps {
  name: TokenName;
  value: string;
}

export const TypographyToken: React.FC<TypographyTokenProps> = ({ name, value }) => {
  const tokenValue = useDesignToken(name);
  
  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        borderColor: useDesignToken('color-core-neutral-200'),
        borderWidth: '1px'
      }}
    >
      <div className="mb-4">
        <p 
          style={{ 
            fontSize: name.includes('fontsize') ? tokenValue : undefined,
            fontWeight: name.includes('fontweight') ? tokenValue : undefined,
            lineHeight: 1.5
          }}
        >
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
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