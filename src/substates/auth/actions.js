import decode from 'jwt-decode';
import { actions } from './constants';
import authService from '../../Auth';
import { history } from '../../routing/history';


export const setUser = user => {
  return {
    type: actions.user.SET.DEFAULT,
    payload: { user }
  }
};

export const initUser = (idToken) => {
  return dispatch => {
    idToken = idToken || localStorage.getItem('id_token');

    const decoded = idToken ? decode(idToken) : null;

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
    authService.parseHash((err, authResult) => {
      const { accessToken, idToken, expiresIn } = authResult;
      if (authResult && accessToken && idToken) {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('id_token', idToken);

        let expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('expires_at', expiresAt);

        dispatch({ type: actions.login.TOKENS_STORED });

        history.replace(route);

        dispatch(initUser(idToken));
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }
};

export const logout = ({ route }) => {
  return dispatch => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    history.replace(route);
    dispatch({ type: actions.logout.DEFAULT });
    dispatch(setUser({ id: null }));
  }
};
