import React, { ReactElement, useEffect, useState, Dispatch } from 'react';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import { sendUsername, stablishConnection,clearConnection } from '../redux/actions/actions';

import UserNameInput from '../components/UserNameInput/UserNameInput';
import './Screen.scss';

export function HomeScreen(props: any): React.ReactElement {
  const { newUser, openConnection, connected, sendUsername, socketObj,clearSocket } = props;

  useEffect(() => {
    const BACKEND = 'https://code-crow1337-chat-app-server.herokuapp.com/';
    const connectToSocket = async () => {
      console.log('backend', BACKEND)
      const socket = await socketIO(BACKEND);
      openConnection(socket);
    };
    connectToSocket();
  }, []);

  const renderModal = (): ReactElement => {
    return newUser.available ===false && connected ===true ? (
      <UserNameInput
        getInput={handleInput}
        errorMessage="Username already in use"
        isError={true}
      />
    ) : (
      <UserNameInput
        getInput={handleInput}
        errorMessage="No empty field"
        isError={false}
      />
    );
  };
  const handleInput = (name: string) => {
    sendUsername(socketObj, name);
  };

  return (
    <main className="mainContent homeScreen">
      <h1>Chat Sky</h1>
      {newUser.username === '' ? renderModal() : <Redirect to="/chat" />}
    </main>
  );
}

const mapStateToProps = (state: any) => {

  const {
    username,
    socketIOConnect: { connected, socket },
  } = state;
  return { newUser: username, connected, socketObj: socket };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  sendUsername: (socket: any, username: string) =>
    dispatch(sendUsername(socket, username)),
  openConnection: (socket: any) => {
    return dispatch(stablishConnection(socket));
  },
  clearSocket: (socket:any, isOpen:boolean) => {
    dispatch(clearConnection(socket, isOpen))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
