import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

export default class SignupRoute extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: ''
  };

  render() {
    return (
      <div>
        <Form>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleEmailChange}
          />
          <Input name="password" type="password" placeholder="Password" />
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
          />
          <Input name="submit" type="submit" />
        </Form>
      </div>
    );
  }
}
