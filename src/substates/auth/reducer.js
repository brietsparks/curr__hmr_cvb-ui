import { cloneDeep } from 'lodash';

import { actions } from './constants';

const defaultState = {
  initialized: false,
  user: {
    id: null,
    attributes: {
      // attributes
    }
  },
  isFetching: false,
};

const authReducer = (initialState = defaultState, action) => {
  const state = cloneDeep(initialState);
  const payload = action.payload;

  switch (action.type) {
    case actions.user.SET.DEFAULT:
      state.user = payload.user;
      break;

    case actions.initialized.SET.DEFAULT:
      state.initialized = payload.initialized;
      break;
  }

  return state;
};

export default authReducer;