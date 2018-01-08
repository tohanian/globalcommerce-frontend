import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Routes
import HomeRoute from './routes/HomeRoute';
import SignupRoute from './routes/SignupRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/signup" component={SignupRoute} />
        </div>
      </Router>
    );
  }
}

export default App;
