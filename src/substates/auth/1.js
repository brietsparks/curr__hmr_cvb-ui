export const mockAuth = () => {
  return dispatch => dispatch(setUser({
    id: 1
  }))
};

export const mockUnauth = () => {
  return dispatch => dispatch(setUser({
    id: null
  }))
};