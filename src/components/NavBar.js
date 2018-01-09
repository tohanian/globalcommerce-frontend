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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          {/* <Menu.Item
            name="home"
            as={NavLink}
            exact
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                primary
                name="signup"
                as={NavLink}
                exact
                to="/signup"
                onClick={this.handleItemClick}
              >
                Sign Up
              </Button>
            </Menu.Item>
          </Menu.Menu> */}
        </Menu>
      </div>
    );
  }
}

// return (
//   <Segment inverted>
//     <Menu inverted pointing secondary>
//       <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
//       <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
//       <Menu.Item naxme='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
//     </Menu>
//   </Segment>
// )
//   }
// }
