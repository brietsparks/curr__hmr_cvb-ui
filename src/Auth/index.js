// import Auth from './Auth';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './config';

export default new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `${AUTH_CONFIG.builderAudience}`,
  // audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid',
  nonce: '1234567890123456'
});

// export default new Auth();

// https://bsapaka.auth0.com/login/callback?code=eaae6591c050df36a1f9&state=bhi1ydGod1Ytqhei7iBSzS4h9LnX1TSa

