import React, { Component } from 'react';
// import { connect } from 'react-redux';
//import { API_URL } from '../enviroment';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

// React Components
import GoogleMapReact from 'google-map-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ListingMarker from '../components/ListingMarker';

// Fake test data
import { listingsData } from '../seed/data';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBDkfyTm0iB8eTWu1rCj_N5YqCMOvYJroQ';

export default class ListingContainer extends Component {
  state = {
    listing: null
  };

  componentDidMount() {
    // fetch(API_URL + '/agents')
    //   .then(response => response.json())
    //   .then(agents => this.setState({ agents }));
    // console.log(listingsData[0].mlsId);
    // console.log(this.props.mlsId);
    this.setState({
      listing: listingsData.find(l => l.mlsId.toString() === this.props.mlsId)
    });
  }

  convertToDollarAmount = number => {
    const dollarAmount =
      '$' +
      number.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
      });
    return dollarAmount;
  };

  loader = () => (
    <div>
      <Segment>
        <Dimmer active inverted>
          <Loader size="medium">Loading</Loader>
        </Dimmer>
      </Segment>
    </div>
  );

  listingShow = () => {
    const l = this.state.listing;

    const images = l.photos.map(photo => ({
      original: photo,
      thumbnail: photo
    }));

    // debugger;

    return (
      <div>
        <div>
          <ImageGallery items={images} />
        </div>
        <div>
          <h1>
            {`${l.address.streetNumberText} ${l.address.streetName.replace(
              /\w\S*/g,
              txt => {
                return (
                  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
              }
            )}`}
          </h1>
          <h3>{`${l.address.city}, ${l.address.state}`}</h3>
          <h2>{`${l.property.bedrooms} bd / ${l.property.bathsFull +
            l.property.bathsHalf * 0.5 +
            l.property.bathsThreeQuarter * 0.75} ba ● ${
            l.property.area
          } sq.ft`}</h2>
          <br />
          <h1>{this.convertToDollarAmount(l.listPrice)}</h1>
        </div>
        <div>
          <h3>Property Info</h3>
          <ul>
            <li>Type: {l.property.type}</li>
            <li>Year Built: {l.property.yearBuilt}</li>
            <li>Lot Size: {l.property.lotSizeArea}</li>
            <li>Parking: {l.property.parking.description}</li>
            <li>Laundry: {l.property.laundryFeatures}</li>
            <li>Stories: {l.property.stories}</li>
            <li>Parking Spaces: {l.property.parking.spaces}</li>
            <li>Pool: {l.property.pool}</li>
          </ul>
          <div style={{ height: '100vh', width: '88vh' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY, language: 'en' }}
              center={{ lat: l.geo.lat, lng: l.geo.lng }}
              zoom={11}
            >
              <ListingMarker lat={l.geo.lat} lng={l.geo.lng} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  };

  listingsContentIfLoaded = () => {
    if (this.state.listing) {
      return this.listingShow();
    } else {
      return this.loader();
    }
  };

  render() {
    return <div>{this.listingsContentIfLoaded()}</div>;
  }
}

// const mapStateToProps = () => {
//   return {};
// };
//
// export default connect(mapStateToProps, null)(ListingContainer);
