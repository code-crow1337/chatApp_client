import { TUSerList } from '../../../types';
import { IS_USERLIST_OPEN } from '../actions/actionTypes';

const initialState = {
  open: false,
};



export default (state = initialState, action: TUSerList) => {
  switch (action.type) {
    case IS_USERLIST_OPEN:
      const {open} = action.payload;
      return {
        ...state,
        open,
      };

    default:
      return state;
  }
};
