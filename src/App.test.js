import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Projects', () => {
  test('Project links points to correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // screen.debug();
    const link = screen.getByRole('link', { name: /projects/i });
    // screen.debug(link);
  })
})