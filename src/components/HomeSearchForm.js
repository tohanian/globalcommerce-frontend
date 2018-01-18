import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class HomeContainer extends Component {
  state = { query: '' };

  render() {
    return (
      <Form size="massive">
        <Form.Group widths="equal">
          <Form.Input name="search" placeholder="Search..." fluid />
          <Form.Button size="massive" icon="search" />
        </Form.Group>
      </Form>
    );
  }
}
