import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import UserNameInput from './UserNameInput';

describe('Testing UserNameInput Component', () => {
  let username;
  let input;
  beforeEach(() => {
    render(<UserNameInput />)
    username = 'Geralt';
    input = document.querySelector('#username_input');
  });
  test('Renders a label with text "Username"', () => {
    const { getByLabelText } = render(<UserNameInput />);
    const linkElement = getByLabelText(/Username/);
    expect(linkElement).toBeInTheDocument();
  });
  test('Check for a texfield an target value', () => {
    fireEvent.change(input, { target: { value: username } });
    expect(input.value).toBe(username);
  });
  test('Shall not fire if field is empty', () => {
    const { getByRole } = render();
    const element = getByRole('button');
    fireEvent.click(element);
    expect(input.value).toBe('Can\'t be empty string')
  });
});
