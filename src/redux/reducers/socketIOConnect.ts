import { TConnected,TStateSocketIo } from '../../../types';
import { IS_CONNECTED, ONLINE_USERS,UPDATE_MESSAGE } from '../actions/actionTypes';

const initialState:TStateSocketIo = {
  connected: false,
  socket: {},
  online: [],
};

export default (state:TStateSocketIo = initialState, action: TConnected):TStateSocketIo => {
  switch (action.type) {
    case IS_CONNECTED:
      const { connected, socket } = action.payload;
      return {
        ...state,
        connected,
        socket,
      };
    case ONLINE_USERS:
      const { online } = action.payload;
      return {
        ...state,
        online,
      };
    default:
      return state;
  }
};
