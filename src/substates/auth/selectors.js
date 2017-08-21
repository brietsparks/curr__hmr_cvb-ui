import { createSelector } from 'reselect'
import { substateKey } from './constants';

export const getSubstate = state => state ? state[substateKey] : null;

export const getUser = substate => {
  return substate.user;
  // return substate ? substate.user: null;
};

export const userIsAuthenticated = createSelector(
  getUser,
  user => user? !!user.id : false
);