import React, { Component } from 'react';
import { connect } from 'react-redux';

// import WithAuth from '../components/WithAuth';

// React Components
import { Grid, Segment } from 'semantic-ui-react';

class DashboardContainer extends Component {
  getFirstName = () => {
    let firstName = [];
    for (var i = 0; i < this.props.currentUser.name.length; i++) {
      let words = this.props.currentUser.name[i].split(' ');
      firstName.push(words[0]);
    }
    return firstName;
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
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h1>Liked Listings</h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.user
  };
};

export default connect(mapStateToProps, null)(DashboardContainer);
