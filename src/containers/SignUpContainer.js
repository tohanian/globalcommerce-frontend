import React, { Component } from 'react';

// React Components
import SignUpForm from '../components/SignUpForm';
import { Grid } from 'semantic-ui-react';

export default class SignInContainer extends Component {
  render() {
    return (
      <div>
        <Grid textAlign="center">
          <Grid.Row
            columns={1}
            verticalAlign="middle"
            style={{ height: '65vh' }}
          >
            <SignUpForm />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
