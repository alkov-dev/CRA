import { render, screen } from '@testing-library/react';
import Rn from './rn';

test('renders input with placeholder text "TESTCASE"', () => {
  render(<Rn />);
  const inputElement = screen.getByPlaceholderText("TESTCASE");
  expect(inputElement).toBeInTheDocument();
});
