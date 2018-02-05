import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// React Components
import { Grid } from 'semantic-ui-react';

// Routes
import HomeRoute from '../routes/HomeRoute';
import SignUpRoute from '../routes/SignUpRoute';
import SignInRoute from '../routes/SignInRoute';
import AgentsRoute from '../routes/AgentsRoute';
import ListingRoute from '../routes/ListingRoute';
import DashboardRoute from '../routes/DashboardRoute';
import ListingSearchRoute from '../routes/ListingSearchRoute';
import AboutRoute from '../routes/AboutRoute';
import ContactRoute from '../routes/ContactRoute';
import NoResultsRoute from '../routes/NoResultsRoute';

class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <Grid relaxed colums={1} padded>
          <Grid.Column>
            <Switch>
              <Route exact path="/" component={HomeRoute} />
              <Route exact path="/signin" component={SignInRoute} />
              <Route exact path="/signup" component={SignUpRoute} />
              <Route exact path="/agents" component={AgentsRoute} />
              <Route
                path="/listings/search/:query"
                component={ListingSearchRoute}
              />
              <Route
                path="/listings/search/noresults"
                component={NoResultsRoute}
              />
              <Route path="/listings/:mlsId" component={ListingRoute} />
              <Route path="/user/dashboard" component={DashboardRoute} />
              <Route path="/about" component={AboutRoute} />
              <Route path="/contact" component={ContactRoute} />
            </Switch>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchQuery: state.listing.searchQuery
  };
};

export default withRouter(connect(mapStateToProps, null)(AppContainer));
