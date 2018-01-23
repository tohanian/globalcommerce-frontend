const likeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_LIKE':
      return {};
    default:
      // console.warn('likeReducer has reached a default action.');
      return state;
  }
};

export default likeReducer;
