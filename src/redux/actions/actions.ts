import { ADD_USER } from './actionTypes';
import { TAddUser } from '../../../types';

export const addUsername = (username: String):TAddUser => {
 console.log('content action',username );
  return {
  type: ADD_USER,
  payload: {
    username,
  },
}}
;
