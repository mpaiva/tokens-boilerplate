import React from 'react';
import { cn } from '@/utils/styles';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className={cn(
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8',
        className
      )}>
        {children}
      </div>
    </div>
  );
};