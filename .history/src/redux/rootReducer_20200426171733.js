import { combineReducers } from 'redux';
import usersReducer from './users/reducer';
import tweetsReducer from './tweets/'

export const rootReducer = combineReducers({
  usersReducer,
});