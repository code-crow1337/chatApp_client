import React from 'react';
import ChatButton from '../ChatButton.tsx/ChatButton';
import UserList from '../UsersList/UsersList';
import './NavBar.scss';

 function NavBar(props: any) {
  const {
    open,
    openCloseMenu,
    usersOnline
  } = props;

  return (
    <div className="navBar">
      <nav className="nav">
        <h1 className="nav__header">Chat Sky</h1>
        <ChatButton
          type="button"
          icon={true}
          size="small"
          iconType="menu"
          onClick={() => openCloseMenu(open)}
        />
        <UserList open={open}  openCloseMenu={openCloseMenu} usersOnline={usersOnline}/>
      </nav>
    </div>
  );
}


export default NavBar;
