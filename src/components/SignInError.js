import React, { Component } from 'react';
import { Segment, Icon } from 'semantic-ui-react';

export default class SignInError extends Component {
  render() {
    return (
      <Segment inverted color="red">
        <Icon name="warning sign" /> {this.props.error}
      </Segment>
    );
  }
}
