import { ADD_USER, IS_USERLIST_OPEN } from './actionTypes';
import { TAddUser,TUSerList } from '../../../types';

export const addUsername = (username: String):TAddUser => {
  return {
  type: ADD_USER,
  payload: {
    username,
  },
}}
;

export const setUserListOpen = (open:boolean):TUSerList => {
  return {
  type:IS_USERLIST_OPEN,
  payload:{
    open
  }
}
}
