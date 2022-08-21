import { screen, render } from '@testing-library/react';

import { Base } from '../Base';

describe('Icon', () => {
  it('Should have svg', () => {
    render(<Base>path</Base>);

    expect(screen.getByRole('img')).toBeTruthy();
  });
});
