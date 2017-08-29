import decode from 'jwt-decode';
import { actions, accessTokenKey } from './constants';
import authService from '../../Auth';
import { history } from '../../routing/history';


export const setUser = user => {
  return {
    type: actions.user.SET.DEFAULT,
    payload: { user }
  }
};

export const initUser = (token, storageKey = accessTokenKey) => {
  return dispatch => {
    token = token || localStorage.getItem(storageKey);

    const decoded = token ? decode(token) : null;

    if (decoded) {
      dispatch(setUser({ id: decoded.sub }))
    }

    dispatch({
      type: actions.initialized.SET.DEFAULT,
      payload: { initialized: true }
    });
  }
};

export const loginShow = () => {
  authService.authorize();
  return { type: actions.login.SHOW };
};

export const loginFinalize = (route) => {
  return dispatch => {
    authService.parseHash(window.location.hash, (err, authResult) => {
      const { accessToken, expiresIn } = authResult;
      if (authResult && accessToken) {
        localStorage.setItem(accessTokenKey, accessToken);

        let expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('expires_at', expiresAt);

        dispatch({ type: actions.login.TOKENS_STORED });

        history.replace(route);
        dispatch(initUser(accessToken));
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }
};

export const logout = ({ route }) => {
  return dispatch => {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem('expires_at');

    history.replace(route);
    dispatch({ type: actions.logout.DEFAULT });
    dispatch(setUser({ id: null }));
  }
};
