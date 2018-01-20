import { SET_USER } from '../actions/types';

const userReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, loggedIn: true, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
