import { actions } from './constants';

export const setUser = user => {
  return {
    type: actions.user.SET.DEFAULT,
    payload: { user }
  }
};

export const mockAuth = () => {
  return dispatch => dispatch(setUser({
    id: 1
  }))
};