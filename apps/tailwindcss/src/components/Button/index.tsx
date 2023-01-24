import classNames from 'classnames';
import { motion, type HTMLMotionProps } from 'framer-motion';

import type { IconPath } from '~/assets/icons';
import { Icon } from '~/components/Icon';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  icon?: IconPath;
  color?: string;
  action?: boolean;
}

export const Button = ({
  className,
  type = 'button',
  icon,
  color,
  action = false,
  children,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = classNames(
    'cursor-pointer',
    'flex justify-center items-center',
    'text-current transition-colors',
    'shadow hover:shadow-md',
    'focus:outline-none focus:ring',
    { 'rounded-full border-0 p-2': action },
    { 'bg-magenta bg-opacity-40 hover:bg-opacity-60': !color },
    color,
    className
  );

  return (
    <motion.button className={classes} type={type} onClick={onClick} {...props}>
      <>
        {icon && <Icon icon={icon} />}
        {!action && children}
      </>
    </motion.button>
  );
};
