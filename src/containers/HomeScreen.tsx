import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import UserNameInput from '../components/UserNameInput/UserNameInput';
import './Screen.scss'

const renderModal = (): ReactElement => <UserNameInput />;

export function HomeScreen({
  newUsername,
}: {
  newUsername?: any;
}): React.ReactElement {
  return (
    <main className="mainContent homeScreen">
      <h1>Chat app</h1>
      {newUsername && newUsername.username !== ''
        ? <Redirect to="/chat" />
        : renderModal()}
    </main>
  );
}

const mapStateToProps = (state: any) => {
  const { username } = state;
  return { newUsername: username };
};
export default connect(mapStateToProps, null)(HomeScreen);
