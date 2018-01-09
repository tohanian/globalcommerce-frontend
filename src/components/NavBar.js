import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navbar">
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            as={NavLink}
            exact
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} exact to="/signup">
              <Button primary name="signup" onClick={this.handleItemClick}>
                Sign Up
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
