import { CREATE_USER, SET_USER } from '../actions/types';

const userReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case CREATE_USER:
      return state;
    case SET_USER:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
