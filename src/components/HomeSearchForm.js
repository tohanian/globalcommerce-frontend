import React, { Component } from 'react';

// React Components
import { Form } from 'semantic-ui-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId
} from 'react-places-autocomplete';

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
