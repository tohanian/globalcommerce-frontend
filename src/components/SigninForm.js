import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// React Components
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Form } from 'semantic-ui-react';

class SignInForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleEmailChange = e => this.setState({ email: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.signInUser(this.state);
    this.setState({
      password: ''
    });
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/user/dashboard" />;
    } else {
      return (
        <div>
          <h1>Sign in to save liked listings.</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              name="email"
              type="text"
              placeholder="Email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
            <Form.Button name="submit" type="submit">
              Log In!
            </Form.Button>
          </Form>
          <br />
          <p>
            Don't have an account? <Link to="/signup"> Sign up.</Link>
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, actions)(SignInForm));
