import { ContentContainer } from '~/components/ContentContainer';
import type { PropsWithChildren } from '~/types';

export const LayoutContainer = ({
  children,
}: PropsWithChildren): JSX.Element => (
  <div className="layout flex min-h-screen flex-col">
    <ContentContainer>
      <div className="overflow-hidden text-center">
        <main>{children}</main>
      </div>
    </ContentContainer>
  </div>
);
