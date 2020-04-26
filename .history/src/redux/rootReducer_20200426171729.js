import { combineReducers } from 'redux';
import usersReducer from './users/reducer';
import tweetsReducer

export const rootReducer = combineReducers({
  usersReducer,
});