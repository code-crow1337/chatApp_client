import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { ChatApp } from './ChatApp';


describe('Testing chatApp DOM', () => {
  beforeEach(() => {
    render(<ChatApp />);
  });
  test('Has a h1 heading "Chat App"', () => {
    const heading = screen.getByRole('heading', { name: /chat app/i });
    expect(heading).toBeInTheDocument();
  });
  test('Render textfield', () => {
    const linkElement = screen.getByRole('textbox');
    expect(linkElement).toBeInTheDocument();
  });
});
