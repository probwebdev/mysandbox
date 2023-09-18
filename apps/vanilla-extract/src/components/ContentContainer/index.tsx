import type { PropsWithChildren } from 'react';

export const ContentContainer = ({ children }: PropsWithChildren) => (
  <div className="container mx-auto sm:max-w-xl md:max-w-2xl xl:max-w-3xl xxl:max-w-content">
    {children}
  </div>
);
