import { ADD_USER } from '../actions/actionTypes';
import {Taction, TStateUsername} from '../../../types'
const initialState:TStateUsername = {
  username: '',
  available:true,
};

export default (state:TStateUsername = initialState, action: Taction):TStateUsername => {
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
