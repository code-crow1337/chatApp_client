import { combineReducers} from 'redux';
import username from './username';
import userList from './userList';
import socketIOConnect from './socketIOConnect';


export const rootReducer= combineReducers({username, userList, socketIOConnect});

export type RootState = ReturnType<typeof rootReducer>