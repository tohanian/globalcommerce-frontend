import React, { Component } from 'react';

// React Components
import HomeSearchForm from '../components/HomeSearchForm';
import { Grid } from 'semantic-ui-react';

export default class HomeContainer extends Component {
  render() {
    return (
      <div
        className="HomeContainer"
        style={{
          height: window.innerHeight * 0.88,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          backgroundImage: 'url(/landing_image.jpg)',
          backgroundSize: 'cover'
        }}
      >
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
