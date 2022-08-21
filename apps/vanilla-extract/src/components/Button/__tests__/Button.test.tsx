import { screen, render, fireEvent } from '@testing-library/react';

import { Button } from '../index';

describe('Button', () => {
  it('Should be clicked once', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should have text', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);

    expect(screen.getByText('Button')).toBeTruthy();
  });
});
