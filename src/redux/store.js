import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const middleware = [logger,thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));