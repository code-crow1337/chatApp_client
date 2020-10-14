import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserListOpen } from '../redux/actions/actions';
import NavBar from '../components/NavBar/NavBar';
import ChatContent from '../components/ChatContent/ChatContent';

export function ChatScreen(props: any): ReactElement {
  const {
    newUser,
    menuState,
    setIsOpen
  } = props;

  const hasUsername = (newUser:any): any => {
    return newUser && newUser.username ? renderChat(newUser) : <Redirect to="/" />;
  };

  const handleMenu = (isOpen: boolean): void => {

    setIsOpen(isOpen);
  };

  const renderChat = (newUser: any): ReactElement => {
    const {username} = newUser; 
    return (
      <>
        <NavBar openCloseMenu={handleMenu} open={menuState} />
        <span className="welcome_message">Welcome {username}</span>
        <ChatContent  />
      </>
    );
  };

  return (
    <main className="mainContent chatScreen">{hasUsername(newUser)}</main>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsOpen: (prevState: boolean) => {
      return dispatch(setUserListOpen(!prevState));
    },
  };
};
const mapStateToProps = (state: any) => {
  const {
    username,
    userList: { open },
  } = state;
  return { newUser: username, menuState: open };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
