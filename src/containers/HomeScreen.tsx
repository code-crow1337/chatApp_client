import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUsername } from '../redux/actions/actions';

import UserNameInput from '../components/UserNameInput/UserNameInput';
import './Screen.scss';

export function HomeScreen({
  newUsername,
  setUsername,
}: {
  newUsername?: any;
  setUsername: any;
}): React.ReactElement {
  const renderModal = (): ReactElement => {
    console.log('render modal');
    return <UserNameInput getUsername={handleUsername} />;
  };

  const handleUsername = (username: string) => {
    console.log('username parent', username);
    setUsername(username);
  };
  console.log('test', newUsername && newUsername.username !== '');
  console.log(!newUsername.username);
  return (
    <main className="mainContent homeScreen">
      <h1>Chat app</h1>
      {newUsername && newUsername.username !== '' ? (
        <Redirect to="/chat" />
      ) : (
        renderModal()
      )}
    </main>
  );
}

const mapStateToProps = (state: any) => {
  const { username } = state;
  return { newUsername: username };
};
const mapDispatchToProps = (dispatch: any) => ({
  setUsername: (username: String) => dispatch(addUsername(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
