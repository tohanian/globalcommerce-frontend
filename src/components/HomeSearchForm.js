import React, { Component } from 'react';
import * as actions from '../actions';

// High-Order React Components
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// React Components
import { Form, Button, Grid, Icon } from 'semantic-ui-react';
import PlacesAutocomplete from 'react-places-autocomplete';

class HomeSearchForm extends Component {
  state = { query: '' };

  onChange = query => this.setState({ query });

  encodeSearchQuery = () => {
    console.log('Search query', this.state.query);
    const encodedURI = encodeURIComponent(
      this.state.query
        .replace(', CA, United States', '')
        .replace('CA ', '')
        .replace(', United States', '')
    );
    return encodedURI;
  };

  handleFormSubmit = e => {
    e.preventDefault();
    // const city = query.split(',')[0]
    // this.props.getListings(this.state.query);
    console.log(this.encodeSearchQuery());
    this.props.history.push('/listings/search/' + this.encodeSearchQuery());

    // Code below converts search query into GPS coordinates via Google Maps API
    // geocodeByAddress(this.state.query)
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
      value: this.state.query,
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

    console.log(this.props);
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

export default withRouter(connect(null, actions)(HomeSearchForm));
