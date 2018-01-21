import React, { Component } from 'react';
import { connect } from 'react-redux';

// React Components
import SignInForm from '../components/SignInForm';
import { Grid } from 'semantic-ui-react';
import SignInError from '../components/SignInError';

class SignInContainer extends Component {
  render() {
    return (
      <div>
        <Grid textAlign="center">
          <Grid.Row columns={1}>
            {this.props.error ? (
              <SignInError error={this.props.error} />
            ) : (
              <div />
            )}
          </Grid.Row>
          <Grid.Row columns={1}>
            <SignInForm {...this.props} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.user.auth_error
  };
};

export default connect(mapStateToProps, null)(SignInContainer);
