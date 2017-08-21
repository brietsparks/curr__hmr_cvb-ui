import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { initReducer } from './reducer';

export const initStore = ({initialState = {}, reducers, middleware}) => {
  return createStore(
    initReducer(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(thunk, ...middleware))
  );
};