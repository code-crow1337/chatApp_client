import React from 'react';
import { connect } from 'react-redux';
import { setUserListOpen } from '../../redux/actions/actions';

import ChatButton from '../ChatButton.tsx/ChatButton';
import UserList from '../UsersList/UsersList';
import './NavBar.scss';

export function NavBar(props: any) {
  const {
    setIsOpen,
    open,
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
          onClick={() => setIsOpen(open)}
        />
        <UserList open={open} />
      </nav>
    </div>
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
    userList: { open },
  } = state;
  return { open };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
