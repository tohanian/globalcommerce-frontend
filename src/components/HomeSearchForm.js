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
    const encodedURI = encodeURIComponent(this.removeExtraSearchParameters());
    return encodedURI;
  };

  removeExtraSearchParameters = () =>
    this.state.query
      .replace(', CA, United States', '')
      .replace('CA ', '')
      .replace(', United States', '');

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.setSearchQuery(this.removeExtraSearchParameters());
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
      <Grid className="HomeSearchGrid" textAlign="center">
        <Form onSubmit={this.handleFormSubmit} width={10}>
          <PlacesAutocomplete
            inputProps={inputProps}
            renderSuggestion={renderSuggestion}
            options={options}
            className="HomeSearchForm"
            onError={this.onError}
          />
          <br />
          <Button type="submit">
            <Icon name="search" />Search
          </Button>
        </Form>
      </Grid>
    );
  }
}

export default withRouter(connect(null, actions)(HomeSearchForm));
