import { cloneDeep } from 'lodash';

const defaultState = {
};

const projectTreeReducer = (initialState = defaultState, action) => {
  const state = cloneDeep(initialState);
  const payload = action.payload;

  switch (action.type) {
  }

  return state;
};

export default projectTreeReducer;