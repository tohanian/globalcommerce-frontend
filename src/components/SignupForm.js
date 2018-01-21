import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import * as actions from '../actions';

class SignUpForm extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    passwordConfirm: ''
  };

  handleEmailChange = e => this.setState({ email: e.target.value });
  handleNameChange = e => this.setState({ name: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });
  handlePasswordConfirmChange = e =>
    this.setState({ passwordConfirm: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      email: '',
      password: '',
      passwordConfirm: '',
      name: ''
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.handleEmailChange}
          value={this.state.email}
        />
        <Form.Input
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handlePasswordChange}
          value={this.state.password}
        />
        <Form.Input
          name="passwordConfirm"
          type="password"
          placeholder="Confirm Password"
          onChange={this.handlePasswordConfirmChange}
          value={this.state.passwordConfirm}
        />
        <Form.Button name="submit" type="submit">
          Sign Up!
        </Form.Button>
      </Form>
    );
  }
}

export default connect(null, actions)(SignUpForm);
