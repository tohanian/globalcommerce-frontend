import React, { Component } from 'react';
import * as actions from '../actions';

// High-Order React Components
import { connect } from 'react-redux';
import WithAuth from './WithAuth';
import { withRouter } from 'react-router';

// React Components
import { Menu, Button, Dropdown, Icon, Input } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: '', query: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => {
    this.props.logoutUser();
  };

  handleSearchChange = e => this.setState({ query: e.target.value });

  handleSearchSubmit = e => {
    if (e.key === 'Enter') {
      const query = this.state.query;
      this.setState({ query: '' });
      this.props.history.push(
        '/listings/search/' + encodeURIComponent(this.state.query)
      );
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navbar">
        <Menu pointing secondary color="blue" inverted>
          <Menu.Item>
            <Link to="/">
              <h1>homie</h1>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Input
              action={{ type: 'submit', content: 'Search' }}
              placeholder="Find listings..."
              onChange={this.handleSearchChange}
              value={this.state.query}
              onKeyUp={this.handleSearchSubmit}
            />
          </Menu.Item>
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
          <Menu.Item
            name="about"
            as={NavLink}
            exact
            to="/about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="contact"
            as={NavLink}
            exact
            to="/contact"
            active={activeItem === 'contact'}
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

export default withRouter(WithAuth(connect(mapStateToProps, actions)(NavBar)));
