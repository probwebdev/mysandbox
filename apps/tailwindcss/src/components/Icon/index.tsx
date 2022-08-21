import type { SVGAttributes } from 'react';

import type { IconPath } from '~/src/assets/icons';
import { iconsPaths } from '~/src/assets/icons';

export interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
  icon: IconPath;
  color?: string;
}

export const Icon = ({
  icon,
  color = 'currentColor',
  width = 24,
  height = 24,
  ...props
}: IconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    stroke={color}
    role="img"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={iconsPaths[icon]}
    />
  </svg>
);
