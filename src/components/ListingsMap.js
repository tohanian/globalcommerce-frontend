import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import ListingMarker from './ListingMarker';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBDkfyTm0iB8eTWu1rCj_N5YqCMOvYJroQ';

export default class ListingsMap extends Component {
  state = { center: this.props.center, zoom: this.props.zoom };

  markers = () =>
    this.props.listings.map(listing => (
      <ListingMarker lat={listing.geo.lat} lng={listing.geo.lng} />
    ));

  // componentDidMount() {
  //   let sumOfLatCoordinates = 0;
  //   let sumOfLngCoordinates = 0;
  //   this.props.listings.forEach(
  //     listing => (sumOfLatCoordinates += listing.geo.lat)
  //   );
  //   this.props.listings.forEach(
  //     listing => (sumOfLngCoordinates += listing.geo.lng)
  //   );
  //   this.setState({
  //     center: {
  //       lat: sumOfLatCoordinates / this.props.listings.length,
  //       lng: sumOfLngCoordinates / this.props.listings.length
  //     }
  //   });
  // }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY, language: 'en' }}
        center={this.state.center}
        zoom={this.state.zoom}
      >
        {this.markers()}
      </GoogleMapReact>
    );
  }
}
