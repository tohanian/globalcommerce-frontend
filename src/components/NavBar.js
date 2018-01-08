import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    );
  }
}
