import { type PropsWithChildren } from 'react';

import { ContentContainer } from '~/components/ContentContainer';

export const LayoutContainer = ({ children }: PropsWithChildren) => (
  <div className="layout flex flex-col min-h-screen bg-primary">
    <ContentContainer>
      <div className="mt-10-vru sm:rounded overflow-hidden shadow-outer text-center">
        <main>{children}</main>
      </div>
    </ContentContainer>
  </div>
);
