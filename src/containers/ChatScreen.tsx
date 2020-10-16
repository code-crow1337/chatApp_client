import React, { ReactElement, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setUserListOpen,
  stablishConnection,
  getOnlineUsers,
  sendMessage,
} from '../redux/actions/actions';
import NavBar from '../components/NavBar/NavBar';
import ChatContent from '../components/ChatContent/ChatContent';

export function ChatScreen(props: any): ReactElement {
  const {
    newUser,
    menuState,
    setIsOpen,
    getUsers,
    socketObj,
    userData,
    setMessage,
  } = props;
  console.log('socket in chatscreen', props);

  useEffect(() => {
    getUsers(socketObj);
  }, []);

  const handleMenu = (isOpen: boolean): void => {
    setIsOpen(isOpen);
  };

  const renderChat = (newUser: any): ReactElement => {
    const { username } = newUser;
  
    return (
      <>
        <NavBar
          openCloseMenu={handleMenu}
          open={menuState}
          userData={userData}
        />
        <span className="welcome_message">Welcome {username}</span>
        <ChatContent  handleMessage={setMessage} userData={userData} currentUser={newUser.username} socket={socketObj}/>
      </>
    );
  };

  return (
    <main className="mainContent chatScreen">
      {newUser.username ? renderChat(newUser) : <Redirect to="/" />}{' '}
    </main>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsOpen: (prevState: boolean) => {
      return dispatch(setUserListOpen(!prevState));
    },
    openConnection: (socket: any) => {
      return dispatch(stablishConnection(socket));
    },
    getUsers: (socket: any) => {
      return dispatch(getOnlineUsers(socket));
    },
    setMessage: (socket: any, username: string, message: string) => {
      dispatch(sendMessage(socket, username, message));
    },
  };
};
const mapStateToProps = (state: any) => {
  const {
    username,
    userList: { open },
    socketIOConnect: { connected, socket, online },
  } = state;
  return {
    newUser: username,
    connected,
    socketObj: socket,
    menuState: open,
    userData: online,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
