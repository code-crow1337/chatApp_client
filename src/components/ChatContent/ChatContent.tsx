import { MessageSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { CLIENT_RENEG_WINDOW } from 'tls';
import SocketIO from '../../socketIO/socketIO';
import ChatButton from '../ChatButton.tsx/ChatButton';
import Message from '../Message/Message';
import './ChatContent.scss';

export default function ChatContent(props: any): React.ReactElement {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [allMessage, setAllMessages] = useState<React.ReactElement[] | any[]>([]);
  const { handleMessage, userData, socket, currentUser } = props;
  
  useEffect(() => {
    if (userData !== undefined){
      formateData();

    }
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

  const renderMessages = (): any => {

    let takingOutMessages:any[]= [];
    userData.forEach((user: any) => {
      if(user.messages.length === 0) return ''; 
       user.messages.forEach((message: any) => {
        takingOutMessages=[...takingOutMessages,{user:user.username, id:user.clientID, message:message.message, messageID: message.id, time:message.time }];
      });
    });
    takingOutMessages.sort((a:any, b:any) => a.time - b.time)
    const createdMessageElements = takingOutMessages.map((message:any) => {
      return (
        <Message key={`${message.user}+${message.message}`} username={message.user} sender={message.user === currentUser} message={message.message} />
      )
    })
    setAllMessages(createdMessageElements);
  };
  const formateData = (): any => {

    renderMessages();
  };
  return (
    <div className="chatContent">
      <div className="chatContent__messages">
        {allMessage === [] ? <p>No Messages yet</p> : allMessage}
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
