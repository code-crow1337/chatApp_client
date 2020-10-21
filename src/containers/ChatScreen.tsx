import React, { ReactElement, useEffect, useState, Dispatch } from 'react';
import socketIO from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setUserListOpen,
  stablishConnection,
  getOnlineUsers,
  sendMessage,
  sendUsername,clearConnection
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
    setMessage,connected,
    openConnection,clearSocket, sendUsername
  } = props;


  useEffect(() => {
    if (connected) {
      return getUsers(socketObj);
    } else if(!connected && newUser.username !== "") {
      const connectToSocket = async () => {
        const BACKEND = 'http://127.0.0.1:4000';
        const socket = await socketIO.connect(BACKEND);

        openConnection(socket);
        sendUsername(socket, newUser.username);
        getUsers(socket);
      };
      connectToSocket();
    }
    return () => {
      clearSocket({}, false);
    }
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
        <ChatContent
          handleMessage={setMessage}
          userData={userData}
          currentUser={newUser.username}
          socket={socketObj}
        />
      </>
    );
  };
  return (

    <main className={`mainContent chatScreen ${menuState ? "open" : "close"}`}>
      {newUser.username !== "" ? (
        renderChat(newUser)
      ) : (
        <Redirect to="/" />
      )}
    </main>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
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
    clearSocket: (socket:any, isOpen:boolean) => {
      dispatch(clearConnection(socket, isOpen))
    },
    sendUsername: (socket: any, username: string) =>
    dispatch(sendUsername(socket, username)),
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
