import React, { Component } from 'react';
import * as actions from '../actions';

// High-Order React Components
import { connect } from 'react-redux';

// React Components
import { Form, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class SignUpForm extends Component {
  state = {
    email: '',
    validEmail: true,
    name: '',
    validName: true,
    password: '',
    validPassword: true,
    passwordConfirm: '',
    validPasswordConfirm: true
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

  validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleEmailValidation = () => {
    if (this.validEmail(this.state.email)) {
      this.setState({ validEmail: true });
    } else {
      this.setState({ validEmail: false });
    }
  };

  handlePasswordValidation = () => {
    if (this.state.password.length >= 8) {
      this.setState({ validPassword: true });
    } else {
      this.setState({ validPassword: false });
    }
  };

  handlePasswordConfirmValidation = () => {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({ validPasswordConfirm: true });
    } else {
      this.setState({ validPasswordConfirm: false });
    }
  };

  formErrors = () => {
    let formErrors = [];
    if (!this.state.validEmail) {
      formErrors.push('Enter a valid email address.');
    }
    if (!this.state.validPassword) {
      formErrors.push('Passwords must be 8 or more characters.');
    }
    if (!this.state.validPasswordConfirm) {
      formErrors.push('Passwords must match.');
    }
    return formErrors;
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/user/dashboard" />;
    } else {
      return (
        <Form
          onSubmit={this.handleSubmit}
          error={
            !this.state.validEmail ||
            !this.state.validPassword ||
            !this.statevalidPasswordConfirm
          }
        >
          <Message error list={this.formErrors()} />
          <Form.Input
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleEmailChange}
            onBlur={this.handleEmailValidation}
            value={this.state.email}
            error={!this.state.validEmail}
          />
          <Form.Input
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
            onBlur={this.handleNameValidation}
          />
          <Form.Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            onBlur={this.handlePasswordValidation}
            value={this.state.password}
            error={!this.state.validPassword}
          />
          <Form.Input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            onChange={this.handlePasswordConfirmChange}
            onBlur={this.handlePasswordConfirmValidation}
            value={this.state.passwordConfirm}
            error={!this.state.validPasswordConfirm}
          />
          <Form.Button name="submit" type="submit">
            Sign Up!
          </Form.Button>
        </Form>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  };
};

export default connect(mapStateToProps, actions)(SignUpForm);
