import React, { Component } from 'react';

// High-Order React Components
import { connect } from 'react-redux';

// React Components
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import LikedListingsContainer from './LikedListingsContainer';
// import Agent from '../components/Agent';

// Fake test data
// import { agentsData } from '../seed/data';

class DashboardContainer extends Component {
  getFirstName = () => {
    return this.props.currentUser.name.split(' ')[0];
  };

  noLikedListingsMessage = () => {
    return (
      <div>
        <h3>You haven't liked any listings yet.</h3>
        <p>You can view listings you like here.</p>
      </div>
    );
  };

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Segment color="green">
                  <h3>Welcome to your profile, {this.getFirstName()}.</h3>
                  <h4>Email: {this.props.currentUser.email}</h4>
                </Segment>
              </Grid.Column>
              {/* <Grid.Column width={11}>
                <Agent agent={agentsData[1]} />
              </Grid.Column> */}
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h1>Liked Listings</h1>
                {this.props.currentUser.likes.length !== 0 ? (
                  <LikedListingsContainer />
                ) : (
                  this.noLikedListingsMessage()
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.user
  };
};

export default connect(mapStateToProps, null)(DashboardContainer);
