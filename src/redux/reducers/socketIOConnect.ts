import { TConnected } from '../../../types';
import { IS_CONNECTED, ONLINE_USERS,UPDATE_MESSAGE } from '../actions/actionTypes';

const initialState = {
  connected: false,
  socket: {},
  online: [],
};

export default (state = initialState, action: TConnected) => {
  switch (action.type) {
    case IS_CONNECTED:
      const { connected, socket } = action.payload;
      return {
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
