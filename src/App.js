import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component / Containers
import NavBar from './components/NavBar';
import AppContainer from './containers/AppContainer';

// Routes
import HomeRoute from './routes/HomeRoute';
import SignupRoute from './routes/SignupRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <AppContainer />
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/signup" component={SignupRoute} />
        </div>
      </Router>
    );
  }
}

export default App;
