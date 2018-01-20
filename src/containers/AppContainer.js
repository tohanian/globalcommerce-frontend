import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

// Routes
import HomeRoute from '../routes/HomeRoute';
import SignUpRoute from '../routes/SignUpRoute';
import SignInRoute from '../routes/SignInRoute';
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
            <Route exact path="/signin" component={SignInRoute} />
            <Route exact path="/signup" component={SignUpRoute} />
            <Route exact path="/agents" component={AgentsRoute} />
            <Route exact path="/listings" component={ListingsRoute} />
            <Route path="/listings/:mlsId" component={ListingRoute} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
