import React, { useEffect, useState } from 'react';
import SocketIO from '../../socketIO/socketIO';
import ChatButton from '../ChatButton.tsx/ChatButton';
import Message from '../Message/Message';
import './ChatContent.scss';

export default function ChatContent(): React.ReactElement {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      console.log('send message');
      submitMessage(event);
    }
  };
  const submitMessage = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLTextAreaElement> | React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (message === '') {
      setIsError(true);
      return;
    }
    console.log('message submited', message);
    setMessage('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };
  return (
    <div className="chatContent">
      <div className="chatContent__messages">
        <Message message={'1'} sender={true} />{' '}
        <Message message={'2'} sender={true} />
        <Message message={'3'} sender={false} />{' '}
        <Message message={'4'} sender={false} />
        <Message message={'15'} sender={true} />{' '}
        <Message message={'6'} sender={false} />
        <Message message={'7'} sender={true} />{' '}
        <Message message={'8'} sender={false} />
      </div>
      <div className="chatContent__userMessage">
        <form
          className="chatContent__userMessage__form"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            submitMessage(event)
          }
        >
          <textarea
            aria-label="user texfield"
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleChange(event)
            }
            onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) =>
              onKeyDown(event)
            }
            value={message}
          />
          <div className="chatContent__userMessage__form--send">
            <ChatButton
              type="submit"
              size="small"
              icon={true}
              iconType="send"
            />
          </div>
        </form>
          <span className={`${isError ? 'error__Message' : 'hidden'}`}>
            *Can't send empty messages. 
          </span>
      </div>
      {/*       <SocketIO /> */}
    </div>
  );
}
