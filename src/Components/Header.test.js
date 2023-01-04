import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

it('renders TopJobs message', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  expect(screen.getByText('TopJobs')).toBeInTheDocument();
 
});

