import React, { Component } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../secrets/apikeys';
import { LISTING_API_URL, LISTING_API_TOKEN } from '../secrets/apikeys';

// High-Order React Components
import { connect } from 'react-redux';

// React Components
import { Segment, Dimmer, Loader, Grid, List, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ListingMarker from '../components/ListingMarker';

// Fake test data
// import { listingsData } from '../seed/data';

class ListingContainer extends Component {
  state = {
    listing: null,
    liked: false
  };

  componentWillMount() {
    this.requestListing();
  }

  requestListing = () => {
    fetch(LISTING_API_URL + '/' + this.props.mlsId, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic ${LISTING_API_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(listing => this.setState({ listing: listing }));
  };

  handleHeartClick = () => {
    console.log(this.state);
    this.setState({ liked: !this.state.liked });
  };

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

    return (
      <Grid stackable columns={2}>
        <Grid.Row stretched>
          <Grid.Column width={6}>
            <Segment color="green">
              <Grid>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <h1>
                      {`${
                        l.address.streetNumberText
                      } ${l.address.streetName.replace(/\w\S*/g, txt => {
                        return (
                          txt.charAt(0).toUpperCase() +
                          txt.substr(1).toLowerCase()
                        );
                      })}`}
                    </h1>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign="center">
                    {this.state.liked ? (
                      <Icon
                        name="heart"
                        color="red"
                        size="big"
                        onClick={this.handleHeartClick}
                      />
                    ) : (
                      <Icon
                        name="heart outline"
                        size="big"
                        onClick={this.handleHeartClick}
                      />
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <p>{`${l.address.city}, ${l.address.state}`}</p>
              <h2>{`${l.property.bedrooms} bd / ${l.property.bathsFull +
                l.property.bathsHalf * 0.5 +
                l.property.bathsThreeQuarter * 0.75} ba ● ${
                l.property.area
              } sq.ft`}</h2>
              <h1>{this.convertToDollarAmount(l.listPrice)}</h1>
            </Segment>
            <div style={{ height: '57vh', width: '65vh' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY, language: 'en' }}
                center={{ lat: l.geo.lat, lng: l.geo.lng }}
                zoom={15}
              >
                <ListingMarker lat={l.geo.lat} lng={l.geo.lng} />
              </GoogleMapReact>
            </div>
            <Segment color="green">
              <h3>Property Info</h3>
              <List>
                <List.Item>
                  <List.Icon name="home" size="big" />
                  <List.Content verticalAlign="middle">
                    Type: {l.property.type}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="calendar" size="big" />
                  <List.Content verticalAlign="middle">
                    Built in {l.property.yearBuilt}
                  </List.Content>
                </List.Item>
                {(() => {
                  if (l.property.lotSizeArea) {
                    return (
                      <List.Item>
                        <List.Icon name="plus" size="big" />
                        <List.Content>
                          Lot Size: {l.property.lotSizeArea}
                        </List.Content>
                      </List.Item>
                    );
                  }
                })()}
                <List.Item>
                  <List.Icon name="car" size="big" />
                  <List.Content verticalAlign="middle">
                    Parking: {l.property.parking.description} ({
                      l.property.parking.spaces
                    }{' '}
                    spaces)
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="sun" size="big" />
                  <List.Content verticalAlign="middle">
                    Laundry: {l.property.laundryFeatures}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="chevron up" size="big" />
                  <List.Content verticalAlign="middle">
                    {`${l.property.stories} ${
                      l.property.stories > 1 ? 'floors' : 'floor'
                    }`}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="theme" size="big" />
                  <List.Content verticalAlign="middle">
                    Pool: {l.property.pool}
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10} textAlign="center">
            <Grid.Row>
              <ImageGallery
                items={images}
                thumbnailPosition="right"
                showPlayButton={false}
                showFullscreenButton={false}
              />
              <Segment color="green" textAlign="left">
                <p>{this.state.listing.remarks}</p>
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} textAlign="center" />
          <Grid.Column width={11} />
        </Grid.Row>
      </Grid>
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

const mapStateToProps = state => {
  return {
    searchedListings: state.listing.listings
  };
};

export default connect(mapStateToProps, null)(ListingContainer);
