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
          <Route  exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/logout' component={Logout} />
        </Switch>
    </Router>

  );
}

export default App;
