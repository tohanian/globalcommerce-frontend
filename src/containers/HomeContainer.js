import React, { Component } from 'react';

// React Components
import HomeSearchForm from '../components/HomeSearchForm';
import { Grid } from 'semantic-ui-react';

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <HomeSearchForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
