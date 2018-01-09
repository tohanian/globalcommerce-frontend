import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'semantic-ui-react';
import * as actions from '../actions';

class SignupForm extends Component {
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
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
            value={this.state.name}
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
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            onChange={this.handlePasswordConfirmChange}
            value={this.state.passwordConfirm}
          />
          <br />
          <Button name="submit" type="submit">
            Sign Up!
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, actions)(SignupForm);
