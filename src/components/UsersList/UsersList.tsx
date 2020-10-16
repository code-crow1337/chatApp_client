import React, { useEffect, useState } from 'react';
import User from '../Users/User';
import { Tuser } from '../../../types';
import './UserList.scss';
import ChatButton from '../ChatButton.tsx/ChatButton';

export function UsersList(props: any): React.ReactElement {
  const { open, openCloseMenu, usersOnline } = props;
  const [online, setOnline] = useState(usersOnline);
  const isTabable = open ? 1 : -1;
  useEffect(() => {
    setOnline(usersOnline);
  }, [usersOnline]);

  const renderOnlineUsers = (): React.ReactElement => {
    if (usersOnline === undefined) return <p>'Error, server not responding'</p>;
    return usersOnline.map((user: Tuser) => (
      <User key={user.clientID} username={user.username} />
    ));
  };
  return (
    <div className={`userList ${open ? 'showList' : 'hideUserList'}`}>
      <ChatButton
        tabIndex={isTabable}
        iconType="times"
        icon={true}
        type="button"
        size="small"
        onClick={() => openCloseMenu(open)}
      />
      {online === undefined
        ? 'Error, server not responding'
        : renderOnlineUsers()}
    </div>
  );
}

export default UsersList;
