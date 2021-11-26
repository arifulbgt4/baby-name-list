import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from './ducks';

export default function configureStore(initialState = {}) {
  const appReducer = combineReducers(reducers);
  const rootReducer = (state, action) => appReducer(state, action);
  const composeEnhancers = composeWithDevTools({});

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
