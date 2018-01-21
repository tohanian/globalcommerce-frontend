const userReducer = (
  state = { loggedIn: false, user: null, auth_error: null },
  action
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        loggedIn: true,
        user: action.payload,
        auth_error: null
      };
    case 'AUTH_ERROR':
      return {
        loggedIn: false,
        user: null,
        auth_error: action.error
      };
    default:
      // console.warn('userReducer has reached a default action.');
      return state;
  }
};

export default userReducer;
