import { combineReducers } from 'redux';
import usersReducer from './users/reducer';
import tweetsReducer from './tweets/reducer'

export const rootReducer = combineReducers({
  usersReducer,tweetsReducer
});