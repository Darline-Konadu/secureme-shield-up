
import React from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = 'default',
  onClose,
}) => {
  return (
    <div
      className={cn(
        'fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-sm',
        variant === 'destructive' 
          ? 'bg-red-600 text-white' 
          : 'bg-slate-800 text-white border border-slate-700'
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          {title && <div className="font-semibold">{title}</div>}
          {description && <div className="text-sm opacity-90">{description}</div>}
        </div>
        <button
          onClick={() => onClose(id)}
          className="ml-4 text-white/70 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};
