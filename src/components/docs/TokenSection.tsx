import React from 'react';
import { useDesignToken } from '../../hooks/useDesignToken';

interface TokenSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const TokenSection: React.FC<TokenSectionProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {description && (
          <p 
            className="text-lg"
            style={{ color: useDesignToken('color-core-neutral-600') }}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};