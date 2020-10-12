import { Add } from '@material-ui/icons';
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
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
