import React, { Component } from 'react';
import DashboardContainer from '../containers/DashboardContainer';
import WithAuth from '../components/WithAuth';

class DashboardRoute extends Component {
  render() {
    return <DashboardContainer />;
  }
}

export default WithAuth(DashboardRoute);
