import React from 'react';
import { useDesignToken } from '../../hooks/useDesignToken';
import type { TokenName } from '../../hooks/useDesignToken';

interface SpacingTokenProps {
  name: TokenName;
  value: string;
}

export const SpacingToken: React.FC<SpacingTokenProps> = ({ name, value }) => {
  const tokenValue = useDesignToken(name);
  
  return (
    <div 
      className="p-4 rounded-lg flex items-center gap-4"
      style={{ 
        borderColor: useDesignToken('color-core-neutral-200'),
        borderWidth: '1px'
      }}
    >
      <div className="flex items-center gap-2">
        <div 
          className="rounded"
          style={{ 
            width: tokenValue,
            height: '24px',
            backgroundColor: useDesignToken('color-core-brand-primary-100')
          }}
        />
        <div 
          className="text-xs"
          style={{ color: useDesignToken('color-core-neutral-500') }}
        >
          {value}
        </div>
      </div>
      <p className="font-medium text-sm">{name}</p>
    </div>
  );
};