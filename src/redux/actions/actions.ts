import { ADD_USER } from './actionTypes';
import { TAddUser } from '../../../types';

export const addUsername = (content: String):TAddUser => ({
  type: ADD_USER,
  payload: {
    content,
  },
});
