import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';
import listingReducer from './listingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  listing: listingReducer
});

export default rootReducer;
