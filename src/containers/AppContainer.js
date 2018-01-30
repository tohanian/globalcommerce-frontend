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
import ListingsRoute from '../routes/ListingsRoute';
import ListingRoute from '../routes/ListingRoute';
import DashboardRoute from '../routes/DashboardRoute';
import ListingSearchRoute from '../routes/ListingSearchRoute';
import AboutRoute from '../routes/AboutRoute';
import ContactRoute from '../routes/ContactRoute';

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
              <Route exact path="/listings/" component={ListingsRoute} />
              <Route
                path="/listings/search/:query"
                component={ListingSearchRoute}
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
    // currentUser: state.user.user,
    // loggedIn: state.user.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, null)(AppContainer));
