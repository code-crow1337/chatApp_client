import { combineReducers} from 'redux';
import username from './username';
import userList from './userList';
import socketIOConnect from './socketIOConnect';
export default combineReducers({username, userList, socketIOConnect});