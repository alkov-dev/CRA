import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TestElements from './TestElements'

afterEach(cleanup);

  it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />); 
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('counter')).toHaveTextContent(0)
   });

   it('should be enabled', () => {
    const { getByTestId } = render(<TestElements />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<TestElements />); 
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button-down')).toBeDisabled()
  });

  it('increments counter', () => {
    const { getByTestId } = render(<TestElements />); 
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByTestId('button-up'))

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('counter')).toHaveTextContent('1')
  });