import React, { useState } from 'react';
import User from '../Users/User';
import './UserList.scss';
import ChatButton from '../ChatButton.tsx/ChatButton';

export function UsersList(props: any):React.ReactElement {
  const { open, openCloseMenu } = props;
  const isTabable = open ? 1 : -1;
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
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}


export default UsersList;
