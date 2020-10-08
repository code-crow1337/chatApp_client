import React, { useState, useEffect } from 'react';


export default function UserNameInput() {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');

  const userNameSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if(value === '') setValue('Can\'t be empty string');
    setUsername(value);
    
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          userNameSubmit(event)
        }
      >
        <label htmlFor="username_input">Username</label>
        <input
          type="text"
          id="username_input"
          aria-label="username_input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
          value={value}
          aria-describedby="Your username to use in this chat app"
        />
        <input type="submit" value="Continue" />
      </form>
    </div>
  );
}
