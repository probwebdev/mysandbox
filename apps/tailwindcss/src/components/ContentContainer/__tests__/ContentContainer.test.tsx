import { screen, render } from '@testing-library/react';

import { ContentContainer } from '../index';

describe('ContentContainer', () => {
  it('Should be present', () => {
    render(<ContentContainer>content</ContentContainer>);

    expect(screen.getByText('content')).toBeTruthy();
  });
});
