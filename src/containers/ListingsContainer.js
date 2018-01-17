import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { API_URL } from '../enviroment';
import { Segment, Dimmer, Loader, Image, Card, Grid } from 'semantic-ui-react';

// React Components
import ListingCard from '../components/ListingCard';
import ListingsFilterForm from '../components/ListingsFilterForm';
import ListingsMap from '../components/ListingsMap';

// Fake test data
import { listingsData } from '../seed/data';

class ListingsContainer extends Component {
  state = {
    listings: [],
    filters: { bedroomsFilter: '0', bathroomsFilter: '0', sort: 'none' }
  };

  componentDidMount() {
    // fetch(API_URL + '/agents')
    //   .then(response => response.json())
    //   .then(agents => this.setState({ agents }));
    this.setState({ listings: listingsData });
  }

  setFilters = filterType => {
    return (e, { value }) => {
      this.setState(prevState => {
        prevState.filters[filterType] = value;
        return prevState;
      });
    };
  };

  filteredListings = () => {
    const bedroomFilteredListings = this.state.listings.filter(
      listing =>
        listing.property.bedrooms >=
        parseInt(this.state.filters.bedroomsFilter, 10)
    );
    const bathroomFilteredListings = bedroomFilteredListings.filter(
      listing =>
        listing.property.bathsFull +
          listing.property.bathsHalf * 0.5 +
          listing.property.bathsThreeQuarter * 0.75 >=
        parseInt(this.state.filters.bathroomsFilter, 10)
    );
    const allFilteredListings = bathroomFilteredListings;
    return allFilteredListings;
  };

  listingsContentIfLoaded = () => {
    if (this.state.listings.length !== 0) {
      return (
        <div>
          <Card.Group>
            {this.filteredListings().map((listing, index) => (
              <ListingCard key={index} listing={listing} />
            ))}
          </Card.Group>
        </div>
      );
    } else {
      return (
        <div>
          <Segment>
            <Dimmer active inverted>
              <Loader size="medium">Loading</Loader>
            </Dimmer>
            <Image src="/assets/images/wireframe/paragraph.png" />
          </Segment>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <ListingsFilterForm
            filters={this.state.filters}
            setFilters={this.setFilters}
          />
        </div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              {this.listingsContentIfLoaded()}
            </Grid.Column>
            <Grid.Column width={8}>
              <div style={{ height: '100vh', width: '100vh' }}>
                <ListingsMap
                  center={{ lat: 34.047443, lng: -118.24975 }}
                  zoom={11}
                  listings={this.filteredListings()}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // users: state.users
});

export default connect(mapStateToProps, null)(ListingsContainer);
