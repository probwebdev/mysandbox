import type { PropsWithChildren } from '~types';

export const ContentContainer = ({
  children,
}: PropsWithChildren): JSX.Element => (
  <div className="container m-auto sm:max-w-xl md:max-w-2xl xl:max-w-3xl xxl:max-w-content">
    {children}
  </div>
);
