import { type PropsWithChildren } from 'react';

import { ContentContainer } from '~/components/ContentContainer';

export const LayoutContainer = ({ children }: PropsWithChildren) => (
  <div className="layout flex min-h-screen flex-col">
    <ContentContainer>
      <div className="overflow-hidden text-center">
        <main>{children}</main>
      </div>
    </ContentContainer>
  </div>
);
