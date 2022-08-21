import { ContentContainer } from '~components/ContentContainer';

import type { PropsWithChildren } from '~types';

export const LayoutContainer = ({
  children,
}: PropsWithChildren): JSX.Element => (
  <div className="layout flex min-h-screen flex-col bg-primary">
    <ContentContainer>
      <div className="overflow-hidden text-center shadow-outer mt-10-vru sm:rounded">
        <main>{children}</main>
      </div>
    </ContentContainer>
  </div>
);
