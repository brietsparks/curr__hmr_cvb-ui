// import Auth from './Auth';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid'
});

// export default new Auth();