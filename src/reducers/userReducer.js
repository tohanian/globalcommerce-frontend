import { CREATE_USER } from '../actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log('in the user reducer!!');
      return state;
    case 'SET_USER':
      // console.
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
