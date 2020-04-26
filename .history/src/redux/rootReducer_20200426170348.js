import { combineReducers } from 'redux';
import usersReducer from './posts/reducer';

export const rootReducer = combineReducers({
  postsReducer
});