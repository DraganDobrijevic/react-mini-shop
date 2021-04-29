import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

import { persistStore } from 'redux-persist';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// with persistStore
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

// export default store;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store, persistor };
