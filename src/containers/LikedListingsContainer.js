import React, { Component } from 'react';
import * as actions from '../actions';

// High-Order Components
import { connect } from 'react-redux';

// Components
import { Card } from 'semantic-ui-react';
import ListingCard from '../components/ListingCard';

class LikedListingsContainer extends Component {
  componentDidMount() {
    this.getLikedListings();
  }

  addLikedListing = mlsId => {
    this.props.getLikedListing(mlsId);
  };

  getLikedListings = () => {
    this.props.currentUser.likes.forEach(like => {
      if (
        !this.props.likedListings.find(
          likedListing => likedListing.mlsId === like.mlsId
        )
      ) {
        this.addLikedListing(like.mlsId);
      }
    });
  };

  showLikedListings = () =>
    this.props.likedListings.map(likedListing => (
      <ListingCard key={likedListing.mlsId} listing={likedListing} />
    ));

  render() {
    return <Card.Group>{this.showLikedListings()}</Card.Group>;
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.user,
    likedListings: state.listing.likedListings
  };
};

export default connect(mapStateToProps, actions)(LikedListingsContainer);
