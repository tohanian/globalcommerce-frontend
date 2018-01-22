// import { CREATE_USER, SET_USER } from '../actions/types';

const listingReducer = (
  state = {
    hoverListingCard: null
  },
  action
) => {
  switch (action.type) {
    case 'SET_HOVER_LISTING_CARD':
      return { ...state, hoverListingCard: action.mlsId };
    case 'UNSET_HOVER_LISTING_CARD':
      return { ...state, hoverListingCard: null };
    default:
      return state;
  }
};

export default listingReducer;
