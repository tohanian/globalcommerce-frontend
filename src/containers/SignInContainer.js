import React, { Component } from 'react';
import SignInForm from '../components/SignInForm';
import { Grid } from 'semantic-ui-react';

export default class SignInContainer extends Component {
  render() {
    return (
      <div>
        <Grid textAlign="center">
          <Grid.Row columns={1}>
            <SignInForm />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
