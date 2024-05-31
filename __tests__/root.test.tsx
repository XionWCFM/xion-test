import { userEvent } from '@storybook/test';
import { render, screen } from '@testing-library/react';

describe('vitest working test ', () => {
  it('no component unit test', () => {
    expect(true).toBe(true);
  });
});

describe('component render test', () => {
  it('component render test', async () => {
    render(<button type={'button'}>helloworld</button>);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'helloworld' }));
    expect(screen.getByRole('button', { name: 'helloworld' })).toBeInTheDocument();
  });
  it('input getByPlaceholder query test', () => {
    render(<input placeholder="010-0000-0000" />);
    expect(screen.getByPlaceholderText(/010/)).toBeInTheDocument();
  });
});
