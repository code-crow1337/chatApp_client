import React, { ReactElement } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';


const hasUsername = (newUser:any):any =>{
  return newUser && newUser.username ? renderChat(newUser) : <Redirect to="/" />;
}
const renderChat =(newUser:any):ReactElement => {
  return <h1>Hi {newUser.username}</h1>
}
export function ChatScreen({newUser}:{newUser?:any}):ReactElement {
  return (
    <div>
    {hasUsername(newUser)}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const { username } = state;
  return { newUser : username };
};
export default connect(mapStateToProps, null)(ChatScreen);