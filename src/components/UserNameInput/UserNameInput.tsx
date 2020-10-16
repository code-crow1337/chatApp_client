import React, { useState, useEffect } from 'react';
import ChatButton from '../ChatButton.tsx/ChatButton';
import './UserNameInput.scss';

export function UserNameInput({ getInput, errorMessage, isError }: { getInput: any, errorMessage:string, isError:boolean }):React.ReactElement {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [typeError, setTypeError] = useState("userInput")
  const [error, setError] = useState(false);

  useEffect(() => {
    if(username !== "" ){
      getInput(username)
    }
    setUsername("");
  }, [username, getInput]);

  useEffect(() => {
    if(isError){
      setTypeError("server")
      setError(isError);
    }
  }, [isError]);
  
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      userNameSubmit(event);
    }
  };

  const userNameSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLDivElement>
  ): void => {
    event.preventDefault();
    if (value === '') {
      setTypeError("userInput");
      return setError(true);
    }
    setError(false);
    setUsername(value);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <div className="username">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          userNameSubmit(event)
        }
      >
        <label htmlFor="username_input">Username:</label>
        <input
          type="text"
          id="username_input"
          aria-label="username_input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            onKeyDown(event)
          }
          value={value}
          aria-describedby="Your username to use in this chat app"
        />
        <ChatButton size="large" type="submit" textContent="Let's chat" />
      </form>
      <span className={`${error ? 'error__Message' : 'hidden'}`}>
        *{typeError === "userInput" ? "No empty values" : errorMessage}
      </span>
    </div>
  );
}

export default UserNameInput;
