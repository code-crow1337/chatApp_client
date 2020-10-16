import { ADD_USER } from '../actions/actionTypes';
import {Taction} from '../../../types'
const initialState = {
  username: '',
  available:true,
};

export default (state = initialState, action: Taction) => {
  switch (action.type) {
    case ADD_USER:

      const {username, available} = action.payload;
      return {
        ...state,
        username,
        available,
      };

    default:
      return state;
  }
};
