const userReducer = (state = { loggedIn: false }, action) => {
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
    case 'LOGOUT_USER':
      return {
        loggedIn: false,
        user: null,
        auth_error: null
      };
    default:
      // console.warn('userReducer has reached a default action.');
      return state;
  }
};

export default userReducer;
