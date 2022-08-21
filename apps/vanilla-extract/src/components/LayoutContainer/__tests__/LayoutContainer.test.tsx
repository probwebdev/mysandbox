import { screen, render } from '@testing-library/react';

import { LayoutContainer } from '../index';

describe('LayoutContainer', () => {
  it('Should be present', () => {
    render(<LayoutContainer>content</LayoutContainer>);

    expect(screen.getByText('content')).toBeTruthy();
  });
});
