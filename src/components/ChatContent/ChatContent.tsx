import React, { useEffect, useState } from 'react';
import SocketIO from '../../socketIO/socketIO';
import ChatButton from '../ChatButton.tsx/ChatButton';
import Message from '../Message/Message';
import './ChatContent.scss';

export default function ChatContent(props: any): React.ReactElement {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [allMessage, setAllMessages] = useState<any[] | any[]>([]);
  const { handleMessage, userData, socket, currentUser } = props;

  useEffect(() => {
    if (userData !== undefined && userData[0].messages.length !== 0)
      formateData();
  }, [userData]);
  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      submitMessage(event);
    }
  };
  const submitMessage = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (message === '') {
      setIsError(true);
      return;
    }
    handleMessage(socket, currentUser, message);
    setMessage('');
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const renderMessages = () => {
    return allMessage.map((message: any) => (
      <Message
        sender={currentUser === message.user}
        username={message.user}
        message={message.message}
      />
    ));
  };
  const formateData = (): void => {
    console.log('chatContent', allMessage);
    userData.forEach((user: any) => {
      const addNewMessage = user.messages[user.messages.length - 1];
      setAllMessages((prevArr) => [
        ...prevArr,
        { message: addNewMessage, user: user.username, id:`${user.username}+${user.clientID}` },
      ]);
    });
  };
  return (
    <div className="chatContent">
      <div className="chatContent__messages">
        {allMessage === [] ? <p>No Messages yet</p> : renderMessages()}
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
    </div>
  );
}
