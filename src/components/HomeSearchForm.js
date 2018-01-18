import React, { Component } from 'react';

// React Components
import { Form, Button, Icon } from 'semantic-ui-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

export default class HomeSearchForm extends Component {
  state = { address: '' };

  onChange = address => this.setState({ address });

  handleFormSubmit = e => {
    e.preventDefault();
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  onError = (status, clearSuggestions) => {
    console.log('Google Maps API returned error with status: ', status);
    clearSuggestions();
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: 'Search...'
    };

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group widths="equal">
          <PlacesAutocomplete
            className="ui input"
            inputProps={inputProps}
            onError={this.onError}
          />
          <Button type="submit">
            <Icon name="search" />Search
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
