import { screen, render, fireEvent } from '@testing-library/react';

import { Button } from '../index';
import { IconPath } from '~/src/assets/icons';

describe('Button', () => {
  it('Should be clicked once', () => {
    const onClick = jest.fn();
    render(<Button icon={IconPath.SEARCH} onClick={onClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should have text', () => {
    const onClick = jest.fn();
    render(
      <Button icon={IconPath.SEARCH} onClick={onClick}>
        Button
      </Button>
    );

    expect(screen.getByText('Button')).toBeTruthy();
  });

  it('Should have icon', () => {
    const onClick = jest.fn();
    render(
      <Button icon={IconPath.SEARCH} onClick={onClick}>
        Button
      </Button>
    );

    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('Should be action button', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} icon={IconPath.SEARCH} action>
        Button
      </Button>
    );

    const btn = screen.getByRole('button');

    expect(btn.classList.contains('rounded-full')).toBeTruthy();
    expect(screen.queryByText('Button')).toBeFalsy();
  });

  it('Should have custom color', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} icon={IconPath.SEARCH} color="custom-color">
        Button
      </Button>
    );

    const btn = screen.getByRole('button');

    expect(btn.classList.contains('custom-color')).toBeTruthy();
    expect(btn.classList.contains('bg-magenta')).toBeFalsy();
  });
});
