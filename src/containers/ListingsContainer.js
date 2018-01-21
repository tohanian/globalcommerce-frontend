import React, { Component } from 'react';
import { connect } from 'react-redux';

// React Components
import { Segment, Dimmer, Loader, Card, Grid } from 'semantic-ui-react';
import ListingCard from '../components/ListingCard';
import ListingsFilterForm from '../components/ListingsFilterForm';
import ListingsMap from '../components/ListingsMap';

// Fake test data
import { listingsData } from '../seed/data';

class ListingsContainer extends Component {
  state = {
    listings: [],
    filters: {
      bedroomsFilter: '',
      bathroomsFilter: '',
      sortType: 'none'
    },
    minPrice: '',
    maxPrice: ''
  };

  componentDidMount() {
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

  setSort = sortType => {
    this.setState(prevState => {
      prevState.filters.sortType = sortType;
      return prevState;
    });
  };

  minPriceChange = e => {
    if (!isNaN(parseInt(e.target.value, 10)) || e.target.value === '') {
      this.setState({ minPrice: e.target.value });
    }
  };

  maxPriceChange = e => {
    if (!isNaN(parseInt(e.target.value, 10)) || e.target.value === '') {
      this.setState({ maxPrice: e.target.value });
    }
  };

  filteredListings = () => {
    let copyOfListings = [...this.state.listings];

    if (this.state.filters.bedroomsFilter !== '') {
      copyOfListings = copyOfListings.filter(
        listing =>
          listing.property.bedrooms >=
          parseInt(this.state.filters.bedroomsFilter, 10)
      );
    }

    if (this.state.filters.bathroomsFilter !== '') {
      copyOfListings = copyOfListings.filter(
        listing =>
          listing.property.bathsFull +
            listing.property.bathsHalf * 0.5 +
            listing.property.bathsThreeQuarter * 0.75 >=
          parseInt(this.state.filters.bathroomsFilter, 10)
      );
    }

    if (this.state.minPrice !== '') {
      copyOfListings = copyOfListings.filter(
        listing => listing.listPrice >= this.state.minPrice
      );
    }

    if (this.state.maxPrice !== '') {
      copyOfListings = copyOfListings.filter(
        listing => listing.listPrice <= this.state.maxPrice
      );
    }

    if (this.state.filters.sortType === 'sortByLowestPrice') {
      copyOfListings = copyOfListings.sort(this.priceSort);
    }

    return copyOfListings;
  };

  priceSort = (a, b) => {
    if (a.listPrice < b.listPrice) return -1;
    if (a.listPrice > b.listPrice) return 1;
    return 0;
  };

  // objs.sort(compare);

  listingsContentIfLoaded = () => {
    if (this.state.listings.length !== 0) {
      return (
        <div>
          <Card.Group style={{ height: '75vh', overflowY: 'scroll' }}>
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
          </Segment>
        </div>
      );
    }
  };

  setMapCenter = () => {
    if (this.state.listings.length !== 0) {
      let sumOfLatCoordinates = 0;
      let sumOfLngCoordinates = 0;
      // debugger;
      this.state.listings.forEach(
        listing => (sumOfLatCoordinates += listing.geo.lat)
      );
      this.state.listings.forEach(
        listing => (sumOfLngCoordinates += listing.geo.lng)
      );
      return {
        lat: sumOfLatCoordinates / this.state.listings.length,
        lng: sumOfLngCoordinates / this.state.listings.length
      };
    } else {
      return { lat: 34.047443, lng: -118.24975 };
    }
  };

  render() {
    return (
      <div>
        <div>
          <ListingsFilterForm
            filters={this.state.filters}
            setFilters={this.setFilters}
            setSort={this.setSort}
            minPriceChange={this.minPriceChange}
            minPrice={this.state.minPrice}
            maxPriceChange={this.maxPriceChange}
            maxPrice={this.state.maxPrice}
          />
        </div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              {this.listingsContentIfLoaded()}
            </Grid.Column>
            <Grid.Column width={8}>
              <div
                style={{
                  height: '73vh',
                  width: '88vh'
                }}
              >
                <ListingsMap
                  center={this.setMapCenter()}
                  zoom={10}
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
