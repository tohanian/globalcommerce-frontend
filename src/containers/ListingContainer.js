import React, { Component } from 'react';
// import { connect } from 'react-redux';
//import { API_URL } from '../enviroment';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

// React Components
// import ListingCard from '../components/ListingCard';

// Fake test data
import { listingsData } from '../seed/data';

export default class ListingContainer extends Component {
  state = {
    Listing: ''
  };

  componentDidMount() {
    // fetch(API_URL + '/agents')
    //   .then(response => response.json())
    //   .then(agents => this.setState({ agents }));
    // this.setState({ listing: listingsData.find(l => l.mlsId === ) });
  }

  loader = () => (
    <div>
      <Segment>
        <Dimmer active inverted>
          <Loader size="medium">Loading</Loader>
        </Dimmer>
      </Segment>
    </div>
  );

  listingsContentIfLoaded = () => {
    if (true) {
      return <div>It's loaded and we're in the listing!</div>;
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
