import { ADD_USER } from '../actions/actionTypes';
import {Taction, TStateUsername} from '../../../types'
import {Action, Reducer} from "redux";


const initialState:TStateUsername = {
  username: '',
  available:true,
};

export interface DispatchAction extends Action {
  payload:Partial<TStateUsername>
}

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
