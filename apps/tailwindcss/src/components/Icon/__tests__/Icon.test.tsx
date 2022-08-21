import { screen, render } from '@testing-library/react';

import { Icon } from '../index';
import { IconPath } from '~/src/assets/icons';

describe('Icon', () => {
  it('Should have svg', () => {
    render(<Icon icon={IconPath.SEARCH} />);

    expect(screen.getByRole('img')).toBeTruthy();
  });
});
