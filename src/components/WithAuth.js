import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const WithAuth = WrappedComponent => {
  class AuthComponent extends Component {
    componentDidMount() {
      if (localStorage.getItem('token')) {
        this.props.getUser();
      } else {
        if (this.props.history) {
          this.props.history.push('/signin');
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(null, actions)(AuthComponent);
};

export default WithAuth;
