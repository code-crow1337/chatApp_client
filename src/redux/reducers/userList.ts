import { TUSerList,TStateUserlist } from '../../../types';
import { IS_USERLIST_OPEN } from '../actions/actionTypes';

const initialState:TStateUserlist = {
  open: false,
};



export default (state:TStateUserlist = initialState, action: TUSerList):TStateUserlist => {
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
