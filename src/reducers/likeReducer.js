const likeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
    case 'DELETE_LIKE':
    default:
      // console.warn('likeReducer has reached a default action.');
      return state;
  }
};

export default likeReducer;
