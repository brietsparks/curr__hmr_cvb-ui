export const substateKey = 'authState';

export const actions = {
  login: {
    SHOW: 'auth.login.SHOW',
    SUCCESS: 'auth.login.SUCCESS',
    FAILURE: 'auth.login.FAILURE',
  },
  logout: {
    ATTEMPT: 'auth.logout.ATTEMPT',
    SUCCESS: 'auth.logout.SUCCESS',
    FAILURE: 'auth.logout.FAILURE',
  },
  user: {
    SET: { DEFAULT: 'auth.user.SET.DEFAULT' }
  }
};