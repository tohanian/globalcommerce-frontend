import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

// Routes
import HomeRoute from '../routes/HomeRoute';
import SignupRoute from '../routes/SignupRoute';
import SigninRoute from '../routes/SigninRoute';
import AgentsRoute from '../routes/AgentsRoute';
import ListingsRoute from '../routes/ListingsRoute';
import ListingRoute from '../routes/ListingRoute';

export default class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <Grid relaxed colums={1} padded>
          <Grid.Column>
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/signin" component={SigninRoute} />
            <Route exact path="/signup" component={SignupRoute} />
            <Route exact path="/agents" component={AgentsRoute} />
            <Route exact path="/listings" component={ListingsRoute} />
            <Route path="/listings/:mlsId" component={ListingRoute} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
