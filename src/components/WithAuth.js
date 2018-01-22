import React, { Component } from 'react';

const WithAuth = WrappedComponent => {
  return class {
    componentDidMount() {
      if (!this.props.loggedIn && localStorage.getItem('token')) {
        // Redux action to fetch user
      } else {
        this.props.history.push('/signin');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const mapStateToProps = state => {
  return { loggedIn: state.user.loggedIn };
};

export default connect(mapStateToProps, null)(WithAuth);
