import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import {UserNameInput } from './UserNameInput';


describe.skip('Testing UserNameInput Component', () => {
  let username;
  let input;

  beforeEach(() => {
    render(<UserNameInput />);
    username = 'Geralt';
    input = document.querySelector('#username_input');
  });
  test('Renders a label with text "Username"', () => {

    const linkElement = screen.getByLabelText(/username/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Check for a texfield an target value', () => {
    fireEvent.change(input, { target: { value: username } });
    expect(input.value).toBe(username);
  });
  test('Shall not fire if field is empty', () => {

    const element = screen.getByRole('button', { name: /let's chat/i });
    fireEvent.click(element);
    const errorParagraph = screen.getByText(/Enter a username/i);
    expect(errorParagraph).toBeInTheDocument();
  });
  test('Shall submit by enter key', () => {
   
    const element = screen.getByRole('textbox', { name: /username_input/i })
    fireEvent.keyDown(element, { key: 'Enter', code: 13, charCode: 13 });
    const errorParagraph = screen.getByText(/Enter a username/i);
    expect(errorParagraph).toBeInTheDocument();
  });
});
