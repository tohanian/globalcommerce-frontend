import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react';
import * as actions from '../actions';

class SigninForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleEmailChange = e => this.setState({ email: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted a sign in');
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <br />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <br />
          <Button name="submit" type="submit">
            Sign Up!
          </Button>
        </Form>
        <p>
          Don't have an account? <Link to="/signup"> Sign up.</Link>
        </p>
      </div>
    );
  }
}

export default connect(null, actions)(SigninForm);
