import type { ReactNode } from 'react';
import { IoStar } from 'react-icons/io5';

interface BadgeProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  color?: string;
}

export const Badge = ({
  icon,
  children,
  className = '',
  color = 'accent',
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent/10 bg-base px-4 py-1 text-xs font-medium text-accent shadow-sm ${className}`}
    >
      {icon ?? <IoStar className={`text-${color} w-4 h-4`} />} {children}
    </span>
  );
};
