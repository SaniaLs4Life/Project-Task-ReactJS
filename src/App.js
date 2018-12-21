import React, { Component } from 'react';
import ProjectBoard from './components/ProjectBoard'
import Navbar from './components/Navbar'
import AddProjectTask from './components/ProjectTask/AddProjectTask'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>          
          <Navbar />
          <Route exact path="/" component={ProjectBoard} />
          <Route exact path="/create-project" component={AddProjectTask} />
        </div>
      </Router>
    );
  }
}

export default App;
