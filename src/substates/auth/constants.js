export const substateKey = 'authState';

export const accessTokenKey = 'access_token';

export const actions = {
  login: {
    SHOW: 'auth.login.SHOW',
    TOKENS_STORED: 'auth.login.TOKENS_STORED',
    FAILURE: 'auth.login.FAILURE',
  },
  logout: {
    DEFAULT: 'auth.logout.DEFAULT'
    // ATTEMPT: 'auth.logout.ATTEMPT',
    // SUCCESS: 'auth.logout.SUCCESS',
    // FAILURE: 'auth.logout.FAILURE',
  },
  initialized: {
    SET: { DEFAULT: 'auth.initialized.SET.DEFAULT' }
  },
  user: {
    SET: { DEFAULT: 'auth.user.SET.DEFAULT' }
  }
};