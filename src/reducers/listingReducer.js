const listingReducer = (
  state = {
    hoverListingCard: null,
    listings: [],
    likedListings: [],
    searchQuery: ''
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
    case 'ADD_LIKED_LISTING':
      let allLikedListings = state.likedListings.slice();
      allLikedListings.push(action.listing);
      return Object.assign({}, state, { likedListings: allLikedListings });
    case 'SET_SEARCH_QUERY':
      return Object.assign({}, state, { searchQuery: action.query });
    default:
      return state;
  }
};

export default listingReducer;
