import { ADD_USER } from '../actions/actionTypes';

const initialState = {
  username: '',
};

type Taction = {
  type: string;
  payload?: any;
};

export default (state = initialState, action: Taction) => {
  console.log('reducer user called', action.payload);
  console.log('action type', action.type);
  switch (action.type) {
    case ADD_USER:
      const {username} = action.payload;
      console.log('add user called')
      return {
        ...state,
        username,
      };

    default:
      return state;
  }
};
