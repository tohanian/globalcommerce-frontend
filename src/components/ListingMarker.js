import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class ListingMarker extends Component {
  state = {
    color: 'blue'
  };

  handleMouseOver = () => this.setState({ color: 'red' });
  handleMouseOut = () => this.setState({ color: 'blue' });

  render() {
    return (
      <Icon
        name="marker"
        size="huge"
        link
        // to={`/listings/${this.props.mlsId}`}
        color={this.state.color}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      />
    );
  }
}
