import { ADD_USER } from '../actions/actionTypes';
import {Taction} from '../../../types'
const initialState = {
  username: '',
};

export default (state = initialState, action: Taction) => {
  switch (action.type) {
    case ADD_USER:

      const {username} = action.payload;
      return {
        ...state,
        username,
      };

    default:
      return state;
  }
};
