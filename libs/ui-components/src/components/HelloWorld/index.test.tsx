import React from 'react';
import { render } from '@testing-library/react';

import { HelloWorld } from './';

/**
 * ===========================
 * MAIN
 * ===========================
 */
describe('HelloWorld', () => {
  it('should render successfully', () => {
    const { container } = render(<HelloWorld />);
    expect(container).toBeTruthy();
  });
});
