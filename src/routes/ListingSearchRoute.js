import React, { Component } from 'react';
import * as actions from '../actions';

// High-Order React Compoennts
import { connect } from 'react-redux';

// React Components
import ListingsContainer from '../containers/ListingsContainer';

class ListingSearchRoute extends Component {
  render() {
    const searchQuery = this.props.match.params.query;
    this.props.getListings(searchQuery);
    this.props.setSearchQuery(searchQuery);

    return (
      <div>
        <ListingsContainer />
      </div>
    );
  }
}

export default connect(null, actions)(ListingSearchRoute);
