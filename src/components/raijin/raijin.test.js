import { render, screen, fireEvent } from '@testing-library/react';
import { Raijin } from './raijin';

it('testing button', () => {
  render(<Raijin />);

  // Getting elemens from component

  const buttonElement = screen.getByText(/increment/i);
  const inputElement = screen.getByTestId('rainput');
  const countElement = screen.getByText(/we r testing btn/i);

  expect(buttonElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();

  //Event firing

  fireEvent.click(buttonElement);
  fireEvent.change(inputElement, { target: { value: 'thunder hits everyday' } });

  //Expected rusults

  expect(countElement).toHaveTextContent('We R Testing Btn 1');
  expect(inputElement).toHaveValue('thunder hits yesterday');
});
