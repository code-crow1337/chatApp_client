import React from 'react';
import { TMessage } from '../../../types';
import './Message.scss'
export default function Message(props:TMessage) {
  const { sender, message,username } = props;
  return (
    <article className={`message ${sender ? 'sender' : 'reciver'}`}>
      <h3>{username}</h3>
      <p>{message}</p>
    </article>
  );
}
