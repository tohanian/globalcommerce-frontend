import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import { Grid } from 'semantic-ui-react';
import HomeRoute from '../routes/HomeRoute';
import SignUpRoute from '../routes/SignUpRoute';
import SignInRoute from '../routes/SignInRoute';
import AgentsRoute from '../routes/AgentsRoute';
import ListingsRoute from '../routes/ListingsRoute';
import ListingRoute from '../routes/ListingRoute';

class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <Grid relaxed colums={1} padded>
          <Grid.Column>
            <Switch>
              <Route exact path="/" component={HomeRoute} />
              <Route
                exact
                path="/signin"
                render={routerProps => {
                  return <SignInRoute {...routerProps} />;
                }}
              />
              <Route exact path="/signup" component={SignUpRoute} />
              <Route exact path="/agents" component={AgentsRoute} />
              <Route exact path="/listings" component={ListingsRoute} />
              <Route path="/listings/:mlsId" component={ListingRoute} />
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
