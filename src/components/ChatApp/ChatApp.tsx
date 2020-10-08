
import React from 'react';
import UserNameInput from '../UserNameInput/UserNameInput';

function ChatApp(): React.ReactElement {
  return (
    <main className="mainContent">
      <h1>Chat app</h1>
      <section  className="UserInput">
        <UserNameInput />
      </section>
    </main>
  );
}
export default ChatApp;
