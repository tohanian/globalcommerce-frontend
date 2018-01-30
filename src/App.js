import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Component / Containers
import NavBar from './components/NavBar';
import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <AppContainer />
        </div>
      </Router>
    );
  }
}

export default App;
