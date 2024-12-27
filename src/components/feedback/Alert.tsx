import React from 'react';
import { cn } from '@/utils/styles';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  info: {
    bg: 'bg-blue-50 border-blue-200',
    icon: Info,
    iconColor: 'text-blue-500',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700'
  },
  success: {
    bg: 'bg-green-50 border-green-200',
    icon: CheckCircle,
    iconColor: 'text-green-500',
    titleColor: 'text-green-800',
    textColor: 'text-green-700'
  },
  warning: {
    bg: 'bg-yellow-50 border-yellow-200',
    icon: AlertTriangle,
    iconColor: 'text-yellow-500',
    titleColor: 'text-yellow-800',
    textColor: 'text-yellow-700'
  },
  error: {
    bg: 'bg-red-50 border-red-200',
    icon: AlertCircle,
    iconColor: 'text-red-500',
    titleColor: 'text-red-800',
    textColor: 'text-red-700'
  }
};

export const Alert = ({ variant = 'info', title, children, className }: AlertProps) => {
  const styles = variants[variant];
  const Icon = styles.icon;

  return (
    <div
      className={cn(
        'rounded-xl border p-4 transition-all duration-200',
        styles.bg,
        className
      )}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Icon className={cn('h-5 w-5', styles.iconColor)} />
        </div>
        <div className="flex-1">
          {title && (
            <h5 className={cn('font-semibold mb-1', styles.titleColor)}>
              {title}
            </h5>
          )}
          <div className={styles.textColor}>{children}</div>
        </div>
      </div>
    </div>
  );
};