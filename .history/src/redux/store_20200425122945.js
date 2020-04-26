import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));