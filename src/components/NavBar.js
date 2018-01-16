import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = { activeItem: '' };

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
          <Menu.Item
            name="agents"
            as={NavLink}
            exact
            to="/agents"
            active={activeItem === 'agents'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="listings"
            as={NavLink}
            exact
            to="/listings"
            active={activeItem === 'listings'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="sign up"
              as={NavLink}
              exact
              to="/signup"
              active={activeItem === 'signup'}
            />
            <Menu.Item as={NavLink} exact to="/signin">
              <Button primary name="sign in" onClick={this.handleItemClick}>
                Sign In
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
