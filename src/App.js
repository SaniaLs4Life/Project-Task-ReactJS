import React, { Component } from 'react';
import ProjectBoard from './components/ProjectBoard'
import Navbar from './components/Navbar'
import AddProjectTask from './components/ProjectTask/AddProjectTask'
import UpdateProjectTask from './components/ProjectTask/UpdateProjectTask'
import Login from './components/Login'
import CallBack from './components/Callback'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Auth from './Auth'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>          
          <Navbar auth={auth} />
          <Route exact path='/' render={(props) => <Login auth={auth} {...props} />}/>
          <Route exact path="/dashboard" render={(props) => <ProjectBoard auth={auth} {...props} />} />          
          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props)
            return <CallBack {...props} />
          }} />
          <Route exact path="/update-project/:id" component={UpdateProjectTask} />
          <Route exact path="/create-project" component={AddProjectTask} />
        </div>
      </Router>
    );
  }
}

export default App;
