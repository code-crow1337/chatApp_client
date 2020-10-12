import React from 'react';
import { connect } from 'react-redux';

import UserNameInput from '../UserNameInput/UserNameInput';
import './ChatApp.scss';

export function ChatApp({ soreUsername }: { soreUsername?: any }): React.ReactElement {
  return (
    <main className="mainContent">
      <h1>Chat app</h1>
      <section className="UserInput">
        <UserNameInput />
      </section>
      <h1>{soreUsername && soreUsername.username !== '' ? 'Hi and welcome' + soreUsername.username : ''}</h1> 
    </main>
  );
};

const mapStateToProps = (state: any) => {
  const { username } = state;
  return { soreUsername: username };
};
export default connect()(ChatApp);

