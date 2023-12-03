/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import TestElements from './TestElements'
import TestAsync from './TestAsync'

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

  // it('should be disabled', () => {
  //   const { getByTestId } = render(<TestElements />); 
  //   // eslint-disable-next-line testing-library/prefer-screen-queries
  //   expect(getByTestId('button-down')).toBeDisabled()
  // });

  it('increments counter', () => {
    const { getByTestId } = render(<TestElements />); 
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByTestId('button-up'))

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('counter')).toHaveTextContent('1')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<TestElements />); 
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByTestId('button-down'))

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('counter')).toHaveTextContent('-1')
  });

  it('increments counter after 0.5s', async () => {
    const { getByTestId, getByText } = render(<TestAsync />); 

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByTestId('button-up'))

    const counter = await waitFor(() => getByText('1')) 

    expect(counter).toHaveTextContent('1')
  });