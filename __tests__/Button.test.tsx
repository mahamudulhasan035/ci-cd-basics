import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import Button from '../src/components/Button';

describe('Button Component', () => {
  it('Should render button with text', () => {
    render(<Button text="Click Me" onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    const handleClick = vi.fn(); // Create a mock function
    render(<Button text="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });
});
