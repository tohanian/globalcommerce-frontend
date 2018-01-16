// import { CREATE_USER, SET_USER } from '../actions/types';

const listingReducer = (
  state = {
    /* default states here */
  },
  action
) => {
  switch (action.type) {
    // case CREATE_USER:
    //   return state;
    // case SET_USER:
    //   return { ...state, loggedIn: true };
    default:
      return state;
  }
};

export default listingReducer;
