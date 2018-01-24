import React, { Component } from 'react';
import * as actions from '../actions';

// High-Order React Compoennts
import { connect } from 'react-redux';

// React Components
import ListingsContainer from '../containers/ListingsContainer';

class ListingSearchRoute extends Component {
  render() {
    this.props.getListings(this.props.match.params.query);
    return (
      <div>
        <ListingsContainer />
      </div>
    );
  }
}

export default connect(null, actions)(ListingSearchRoute);
