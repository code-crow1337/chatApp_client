import {
  ADD_USER,
  IS_USERLIST_OPEN,
  IS_CONNECTED,
  ONLINE_USERS,
} from './actionTypes';
import { TAddUser, TUSerList, TConnected,TSocketIO } from '../../../types';
import {  Action } from 'redux'; 
import {ThunkDispatch } from 'redux-thunk'
import {RootState} from '../reducers/index'
import {Socket} from 'socket.io-client'

export const addUsername = (username: string, available: boolean): TAddUser => {
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
export const clearConnection = ( socket:TSocketIO,
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
  socket: TSocketIO,
  username: string,
  message: string
): any => {
  return (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
    socket.emit('send message', { username, message });
    socket.on('data updated', (response: any) => {
      return dispatch(updateData(response.onlineUsers));
    });
  };
};
export const updateData = (users: TSocketIO) => {
  return {
    type: ONLINE_USERS,
    payload: {
      online: users,
    },
  };
};
export const getOnlineUsers = (socket: TSocketIO) => {
  return (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
    socket.on('data updated', (response: any) => {
      return dispatch(updateData(response.onlineUsers));
    });
  };
};

export const sendUsername = (socket: TSocketIO, username: string) => {
  return (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
    socket.emit('newUser', { username });
    socket.on('response newUser', (response: any) => {
      if (!response.available) return dispatch(addUsername('', false));
      dispatch(getOnlineUsers(socket));
      dispatch(addUsername(response.username, true));
    });
  };
};
export const stablishConnection = (socket: TSocketIO) => {
  return (dispatch:  ThunkDispatch<RootState, unknown, Action<string>>) => {
    socket.on('connected', (response: any) => {
      if (response.isConnected) {
        dispatch(setConnection(socket, response.isConnected));
      }
    });
  };
};
