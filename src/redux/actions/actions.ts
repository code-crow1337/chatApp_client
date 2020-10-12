import { ADD_USER } from './actionTypes';
import { TAddUser } from '../../../types';

export const addUsername = (username: String):TAddUser => {
  return {
  type: ADD_USER,
  payload: {
    username,
  },
}}
;
