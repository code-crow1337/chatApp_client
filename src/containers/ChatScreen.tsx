import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import ChatContent from '../components/ChatContent/ChatContent';

const hasUsername = (newUser: any): any => {
  return newUser && newUser.username ? (
    renderChat(newUser)
  ) : (
    <Redirect to="/" />
  );
};
const renderChat = (newUser: any): ReactElement => {
  return (
    <>
      <NavBar />
      <span className="welcome_message">Welcome {newUser.username}</span>
      <ChatContent />
    </>
  );
};
export function ChatScreen({ newUser }: { newUser?: any }): ReactElement {
  return <main className="mainContent chatScreen">{hasUsername(newUser)}</main>;
}

const mapStateToProps = (state: any) => {
  const { username } = state;
  return { newUser: username };
};
export default connect(mapStateToProps, null)(ChatScreen);
