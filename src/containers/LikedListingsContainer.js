import React, { Component } from 'react';
import * as actions from '../actions';

// High-Order Components
import { connect } from 'react-redux';

// Components
import { Card } from 'semantic-ui-react';
import ListingCard from '../components/ListingCard';

// Fake Test Data
import { listingsData } from '../seed/data';

class LikedListingsContainer extends Component {
  getLikedListings = () =>
    this.props.currentUser.likes.map(like =>
      listingsData.find(listing => listing.mlsId === like.mlsId)
    );

  getLikedListingComponents = () =>
    this.getLikedListings().map((likedListing, i) => (
      <ListingCard key={i} listing={likedListing} />
    ));

  render() {
    return <Card.Group>{this.getLikedListingComponents()}</Card.Group>;
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.user
  };
};

export default connect(mapStateToProps, actions)(LikedListingsContainer);
