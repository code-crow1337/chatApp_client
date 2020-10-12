import { ADD_USER } from '../actions/actionTypes';

const initialState = {
  username: '',
};

type Taction = {
  type: string;
  payload?: any;
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
