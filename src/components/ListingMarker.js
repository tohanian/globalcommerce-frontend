import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

export default class ListingMarker extends Component {
  state = {
    color: 'blue',
    clicked: false
  };

  handleMouseOver = () => this.setState({ color: 'red' });
  handleMouseOut = () => this.setState({ color: 'blue' });
  handleClick = () => this.setState({ clicked: true });

  render() {
    if (this.state.clicked) {
      return <Redirect to={`/listings/${this.props.mlsId}`} />;
    } else {
      return (
        <Icon
          name="marker"
          size="huge"
          link
          onClick={this.handleClick}
          color={this.state.color}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        />
      );
    }
  }
}
