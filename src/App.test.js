import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator with initial display value', () => {
  const { getByText, container, debug } = render(<App />);
  debug(); // Print out the rendered component for inspection
  console.log(container.innerHTML); // Log the container's HTML
  console.log(document.body.innerHTML); // Log the entire document body's HTML
  const displayElement = getByText(/Scientific Calculator/i);
  expect(displayElement).toBeInTheDocument();
});

test('clicking numbers updates the display', () => {
  const { getByText, container, debug } = render(<App />);
  debug(); // Print out the rendered component for inspection
  console.log(container.innerHTML); // Log the container's HTML
  console.log(document.body.innerHTML); // Log the entire document body's HTML
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  const displayElement = getByText('123');
  expect(displayElement).toBeInTheDocument();
});



// Add more tests for other operations and edge cases as needed
