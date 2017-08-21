import { combineReducers } from 'redux';

import authReducer from '../substates/auth/reducer';
import { substateKey as authKey } from '../substates/auth/constants';

import projectTreeReducer from '../substates/projectTree/reducer';
import { substateKey as projectTreeKey } from '../substates/projectTree/constants';


export const initReducer = (reducers = {}) => {
  Object.assign(reducers, {
    [authKey]: authReducer,
    [projectTreeKey]: projectTreeReducer,
  });

  return combineReducers(reducers);
};