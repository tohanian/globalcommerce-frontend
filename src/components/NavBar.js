import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// React Components
import { Menu, Button, Dropdown, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import WithAuth from './WithAuth';

class NavBar extends Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navbar">
        <Menu pointing secondary color="blue" inverted>
          <Menu.Item>
            <h1>homie</h1>
          </Menu.Item>
          <Menu.Item
            name="search"
            as={NavLink}
            exact
            to="/"
            icon="search"
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
          {this.props.loggedIn ? (
            <Menu.Menu position="right">
              <Dropdown item text="Profile">
                <Dropdown.Menu divided="true">
                  <Dropdown.Item to="/user/dashboard" as={NavLink}>
                    <Icon name="heart" />Liked Listings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.handleLogout}>
                    <Icon name="log out" />Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right">
              <Menu.Item
                name="sign up"
                as={NavLink}
                exact
                to="/signup"
                active={null}
              />
              <Menu.Item as={NavLink} exact to="/signin">
                <Button
                  name="sign in"
                  color="green"
                  onClick={this.handleItemClick}
                >
                  Log In
                </Button>
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.user,
    loggedIn: state.user.loggedIn
  };
};

export default WithAuth(connect(mapStateToProps, actions)(NavBar));
