import { createSelector } from 'reselect'
import { substateKey } from './constants';

export const getSubstate = state => state ? state[substateKey] : null;


export const userIsAuthenticated = state => {
  const substate = getSubstate(state);
  const user = substate ? getUser(substate) : {};
  return !!user.id;
};


// export const userIsAuthenticated = createSelector(
//   getUser,
//   user => user? !!user.id : false
// );
