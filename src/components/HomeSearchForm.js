import React, { Component } from 'react';

// React Components
import { Form, Button, Grid, Icon } from 'semantic-ui-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

export default class HomeSearchForm extends Component {
  state = { address: '' };

  onChange = address => this.setState({ address });

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.address.split(',')[0]);
    // geocodeByAddress(this.state.address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));
  };

  onError = (status, clearSuggestions) => {
    console.log('Google Maps API returned error with status: ', status);
    clearSuggestions();
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      type: 'search',
      placeholder: 'Search listings...'
    };

    const renderSuggestion = ({ formattedSuggestion }) => (
      <div>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>
    );

    var options = {
      types: ['(regions)'],
      componentRestrictions: { country: 'us' }
    };

    return (
      <Grid>
        <Form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete
            inputProps={inputProps}
            renderSuggestion={renderSuggestion}
            options={options}
            className="HomeSearchForm"
            onError={this.onError}
          />
          <Button type="submit">
            <Icon name="search" />Search
          </Button>
        </Form>
      </Grid>
    );
  }
}
// var options = {
//  types: ['(cities)'],
//  componentRestrictions: {country: "us"}
// };
