import React, { Component } from 'react';
import ListingContainer from '../containers/ListingContainer';

export default class ListingRoute extends Component {
  render() {
    return <ListingContainer mlsId={this.props.match.params.mlsId} />;
  }
}
