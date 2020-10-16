import React, { useEffect, useState } from 'react';
import User from '../Users/User';
import { Tuser } from '../../../types';
import './UserList.scss';
import ChatButton from '../ChatButton.tsx/ChatButton';

export function UsersList(props: any): React.ReactElement {
  const { open, openCloseMenu, usersOnline } = props;
  const [online, setOnline] = useState<string[] | []>([]);
  const isTabable = open ? 1 : -1;


  useEffect(() => {
    if (usersOnline !== undefined) {
      let totalUsers: string[] = [];
      usersOnline.forEach((user: any) => {
        totalUsers = [...totalUsers, user.username];
      });
      setOnline(totalUsers);
    }
  }, [usersOnline]);

  const renderOnlineUsers = (): any => {
    if (online === []) return <p>'Error, server not responding'</p>;
    return (online as Array<string>).map((user: string) => (
      <User key={user} username={user} />
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
