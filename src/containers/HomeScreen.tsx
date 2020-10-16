import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import { sendUsername, stablishConnection } from '../redux/actions/actions';

import UserNameInput from '../components/UserNameInput/UserNameInput';
import './Screen.scss';

export function HomeScreen(props: any): React.ReactElement {
  const { newUser, openConnection, connected, sendUsername, socketObj } = props;

  useEffect(() => {
    const BACKEND = 'http://127.0.0.1:4000';
    const connectToSocket = async () => {
      const socket = await socketIO.connect(BACKEND);
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
      <h1>Chat app</h1>
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
const mapDispatchToProps = (dispatch: any) => ({
  sendUsername: (socket: any, username: string) =>
    dispatch(sendUsername(socket, username)),
  openConnection: (socket: any) => {
    return dispatch(stablishConnection(socket));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
