import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import ChatApp from './ChatApp';

describe.only('Testing chatApp DOM', () => {
  const username = 'Geralt';
  const input = document.querySelector('#username_input');

  test('Has a h1 heading "Chat App"', () => {
    const { getByRole } = render(<ChatApp />);
    const linkElement = getByRole("heading");
    expect(linkElement).toBeInTheDocument();
  });
  test('Render textfield', () => {
    const { getByRole } = render(<ChatApp />);
    const linkElement = getByRole("textbox");
    expect(linkElement).toBeInTheDocument();
  });
});
