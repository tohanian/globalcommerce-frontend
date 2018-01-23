import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';
import listingReducer from './listingReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
  user: userReducer,
  listing: listingReducer,
  like: likeReducer
});

export default rootReducer;
