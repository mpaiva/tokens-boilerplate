import React from 'react';

interface TokenDescriptionProps {
  description: string;
}

export const TokenDescription = ({ description }: TokenDescriptionProps) => (
  <p className="text-sm text-gray-500 mt-1">{description}</p>
);