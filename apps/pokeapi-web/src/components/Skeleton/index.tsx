import classNames from 'classnames';
export interface SkeletonProps {
  variant?: 'rectangular' | 'rounded';
  width?: number | string;
  height?: number | string;
}

export const Skeleton = ({
  variant = 'rectangular',
  width = '100%',
  height = '1rem',
}: SkeletonProps) => {
  return (
    <div
      className={classNames(variant, 'animate-pulse bg-gray-200')}
      style={{ width, height }}
    />
  );
};
