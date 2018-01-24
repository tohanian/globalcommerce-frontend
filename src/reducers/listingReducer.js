// import { CREATE_USER, SET_USER } from '../actions/types';

const listingReducer = (
  state = {
    hoverListingCard: null,
    listings: []
  },
  action
) => {
  switch (action.type) {
    case 'SET_HOVER_LISTING_CARD':
      return Object.assign({}, state, { hoverListingCard: action.mlsId });
    case 'UNSET_HOVER_LISTING_CARD':
      return Object.assign({}, state, { hoverListingCard: null });
    case 'SET_LISTINGS':
      return Object.assign({}, state, { listings: action.listings });
    default:
      return state;
  }
};

export default listingReducer;
