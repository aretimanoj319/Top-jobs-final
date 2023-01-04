import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

it('renders First slide label message', () => {
  render(<BrowserRouter><Home /></BrowserRouter>);
  expect(screen.getByText('Find Your dream job')).toBeInTheDocument();
 
});

it('uses correct src', async () => {
  render(<BrowserRouter><Home /></BrowserRouter>);
    const image = screen.getByAltText('slide1');
    expect(image.src).toContain('1.jpg');
  // or
  //expect(image).toHaveAttribute('src', 'the_url')
});