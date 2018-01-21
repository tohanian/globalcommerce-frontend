import React, { Component } from 'react';

// React Components
import { Segment, Dimmer, Loader, Item, Grid } from 'semantic-ui-react';
import Agent from '../components/Agent';

// Fake test data
import { agentsData } from '../seed/data';

export default class AgentsContainer extends Component {
  state = { agents: [] };

  componentDidMount() {
    this.setState({ agents: agentsData });
  }

  agentsContentIfLoaded = () => {
    if (this.state.agents.length !== 0) {
      return (
        <Item.Group>
          {this.state.agents.map((agent, index) => (
            <Agent key={index} agent={agent} />
          ))}
        </Item.Group>
      );
    } else {
      return (
        <div>
          <Segment>
            <Dimmer active inverted>
              <Loader size="medium">Loading</Loader>
            </Dimmer>
          </Segment>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} />
            <Grid.Column width={8}>{this.agentsContentIfLoaded()}</Grid.Column>
            <Grid.Row width={4} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
