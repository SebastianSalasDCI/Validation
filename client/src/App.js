import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';

function App() {
  return (
    
    <Router>
        <Switch>
          <Route  exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
