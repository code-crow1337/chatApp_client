import {
  ADD_USER,
  IS_USERLIST_OPEN,
  IS_CONNECTED,
  ONLINE_USERS,
  UPDATE_MESSAGE,
} from './actionTypes';
import { TAddUser, TUSerList, TConnected } from '../../../types';
import socketIO from '../../socketIO/socketIO';

export const addUsername = (username: String, available: boolean): TAddUser => {
  return {
    type: ADD_USER,
    payload: {
      username,
      available,
    },
  };
};

export const setUserListOpen = (open: boolean): TUSerList => {
  return {
    type: IS_USERLIST_OPEN,
    payload: {
      open,
    },
  };
};
export const clearConnection = ( socket: any,
  isConnected: boolean) => {
    return {
      type: IS_CONNECTED,
      payload: {
        socket,
        connected: isConnected,
      },
    };
  }
export const setConnection = (
  socket: any,
  isConnected: boolean
): TConnected => {
  return {
    type: IS_CONNECTED,
    payload: {
      socket,
      connected: isConnected,
    },
  };
};
export const sendMessage = (
  socket: any,
  username: string,
  message: string
): any => {
  return (dispatch: any) => {
    socket.emit('send message', { username, message });
    socket.on('data updated', (response: any) => {
      return dispatch(updateData(response.onlineUsers));
    });
  };
};
export const updateData = (users: any) => {
  return {
    type: ONLINE_USERS,
    payload: {
      online: users,
    },
  };
};
export const getOnlineUsers = (socket: any) => {
  console.log('getonline users triggered');
  return (dispatch: any) => {
    socket.on('data updated', (response: any) => {
      console.log('recived users', response);
      return dispatch(updateData(response.onlineUsers));
    });
  };
};
export const sendUsername = (socket: any, username: string) => {
  console.log('sendusername recived username', username);
  console.log('username socket',socket);
  return (dispatch: any) => {
    socket.emit('newUser', { username });
    socket.on('response newUser', (response: any) => {
      if (!response.available) return dispatch(addUsername('', false));
      dispatch(getOnlineUsers(socket));
      return dispatch(addUsername(response.username, true));
    });
  };
};
export const stablishConnection = (socket: any): any => {
  return (dispatch: any) => {
    socket.on('connected', (response: any) => {
      if (response.isConnected) {
        console.log('we are connected');
        dispatch(setConnection(socket, response.isConnected));
      }
    });
  };
};
