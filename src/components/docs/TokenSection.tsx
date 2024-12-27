import React from 'react';

interface TokenSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const TokenSection = ({ title, description, children }: TokenSectionProps) => {
  return (
    <section className="py-8 border-b border-gray-200 last:border-0">
      <h2 className="text-2xl font-bold mb-2" id={title.toLowerCase()}>
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      {children}
    </section>
  );
};