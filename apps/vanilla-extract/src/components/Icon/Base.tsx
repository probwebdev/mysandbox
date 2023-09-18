import type { ReactNode, SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
  children: ReactNode;
}

export const Base = ({
  children,
  width = 24,
  height = 24,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    width={width}
    height={height}
    {...props}
  >
    {children}
  </svg>
);
