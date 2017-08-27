import { actions } from './constants';
import authService from '../../Auth';

export const setUser = user => {
  return {
    type: actions.user.SET.DEFAULT,
    payload: { user }
  }
};

export const loginShow = () => {
  authService.showModal();
  return { type: actions.login.SHOW };
};

function loginSuccess(profile, token) {
  return {
    type: actions.login.SUCCESS,
    profile,
    token
  };
}

function loginFailure(err) {
  return {
    type: actions.login.FAILURE,
    err
  };
}

// Opens the Lock widget and
// dispatches actions along the way
export function login() {
  const lock = createLock();
  return dispatch => {
    lock.show()
  }
}

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
function requestLogout() {
  return {
    type: actions.logout.ATTEMPT,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: actions.logout.SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}


// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout())
  };
}
