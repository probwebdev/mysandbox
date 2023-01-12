import { motion, type HTMLMotionProps } from 'framer-motion';

export const Button = ({
  className,
  type = 'button',
  children,
  onClick,
  ...props
}: HTMLMotionProps<'button'>): JSX.Element => (
  <motion.button type={type} onClick={onClick} {...props}>
    {children}
  </motion.button>
);
