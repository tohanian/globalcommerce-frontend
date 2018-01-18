import React, { Component } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../secrets/apikeys';

// React Components
import GoogleMapReact from 'google-map-react';
import ListingMarker from './ListingMarker';

export default class ListingsMap extends Component {
  markers = () =>
    this.props.listings.map(listing => (
      <ListingMarker
        key={listing.mlsId}
        lat={listing.geo.lat}
        lng={listing.geo.lng}
      />
    ));

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY, language: 'en' }}
        center={this.props.center}
        zoom={this.props.zoom}
      >
        {this.markers()}
      </GoogleMapReact>
    );
  }
}
