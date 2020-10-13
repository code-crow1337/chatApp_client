import React from 'react';
import { connect } from 'react-redux';
import { setUserListOpen } from '../../redux/actions/actions';
import User from '../Users/User';
import './UserList.scss';
import ChatButton from '../ChatButton.tsx/ChatButton';

export function UsersList(props: any) {
  const { open, setIsOpen } = props;
  console.log(props);
  return (
    <div className={`userList ${open ? 'showList' : 'hideUserList'}`}>
      <ChatButton
        iconType="times"
        icon={true}
        type="button"
        size="small"
        onClick={() => setIsOpen(open)}
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
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
