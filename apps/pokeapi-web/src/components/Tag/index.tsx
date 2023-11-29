import type { ReactNode } from 'react';

import classNames from 'classnames';

export interface TagProps {
  variant: 'info' | 'neutral';
  children: ReactNode;
}

export const Tag = ({ variant, children }: TagProps) => {
  const className = classNames(
    'rounded font-medium px-2 py-1 capitalize border border-solid',
    { 'bg-blue-500 text-blue-100 border-blue-400': variant === 'info' },
    { 'bg-gray-400 text-gray-100 border-gray-300': variant === 'neutral' }
  );
  return <span className={className}>{children}</span>;
};
