import React, { Component } from 'react';
// import { API_URL } from '../enviroment';
import { Segment, Dimmer, Loader, Image, Item } from 'semantic-ui-react';
import Agent from '../components/Agent';

// Fake test data
import { agentsData } from '../seed/data';

export default class AgentsContainer extends Component {
  state = { agents: [] };

  componentDidMount() {
    // fetch(API_URL + '/agents')
    //   .then(response => response.json())
    //   .then(agents => this.setState({ agents }));
    this.setState({ agents: agentsData });
  }

  agentsContentIfLoaded = () => {
    // console.log(this.state);
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
            <Image src="/assets/images/wireframe/paragraph.png" />
          </Segment>
        </div>
      );
    }
  };

  render() {
    return <div>{this.agentsContentIfLoaded()}</div>;
  }
}
