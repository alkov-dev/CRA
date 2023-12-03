import { render, screen, fireEvent } from '@testing-library/react';
import { Raijin } from './raijin';

it('testing button', () => {
  render(<Raijin />);
  const buttonElement = screen.getByText(/increment/i);

  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  const countElement = screen.getByText(/we r testing btn/i);

  expect(countElement).toHaveTextContent('We R Testing Btn 1');
});
