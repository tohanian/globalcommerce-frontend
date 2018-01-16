import React, { Component } from 'react';
import { Item, Label } from 'semantic-ui-react';

export default class Agent extends Component {
  render() {
    console.log(this.props.agent);
    return (
      <Item>
        <Item.Image
          className="agentProfilePhoto"
          src={this.props.agent.profile_photo}
        />
        <Item.Content verticalAlign="middle">
          <Item.Header>{this.props.agent.name}</Item.Header>
          <Item.Meta>{this.props.agent.license_number}</Item.Meta>
          <Item.Description>
            {this.props.agent.bio}
            <Item.Extra>
              <Label icon="mail outline" content={this.props.agent.email} />
            </Item.Extra>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}
