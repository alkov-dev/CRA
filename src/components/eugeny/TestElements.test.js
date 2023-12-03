import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from './TestElements'

afterEach(cleanup);

  it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />); 
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('counter')).toHaveTextContent(0)
   });