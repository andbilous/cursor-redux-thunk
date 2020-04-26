import { combineReducers } from 'redux';
import usersReducer from './users/reducer';
import tweetsReducer from './'

export const rootReducer = combineReducers({
  usersReducer,
});