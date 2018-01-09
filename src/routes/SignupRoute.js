import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

export default class SignupRoute extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: ''
  };

  handleEmailChange = e => this.setState({ email: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });
  handlePasswordConfirmChange = e =>
    this.setState({ passwordConfirm: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submit User Data');
    this.setState({
      email: '',
      password: '',
      passwordConfirm: ''
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
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            onChange={this.handlePasswordConfirmChange}
            value={this.state.passwordConfirm}
          />
          <Input name="submit" type="submit" />
        </Form>
      </div>
    );
  }
}
