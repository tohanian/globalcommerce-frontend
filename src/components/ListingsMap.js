import React, { Component } from 'react';

// React Components
import GoogleMapReact from 'google-map-react';
import ListingMarker from './ListingMarker';

export default class ListingsMap extends Component {
  markers = () =>
    this.props.listings.map(listing => (
      <ListingMarker
        key={listing.mlsId}
        mlsId={listing.mlsId}
        lat={listing.geo.lat}
        lng={listing.geo.lng}
      />
    ));

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          language: 'en'
        }}
        center={this.props.center}
        zoom={this.props.zoom}
      >
        {this.markers()}
      </GoogleMapReact>
    );
  }
}
