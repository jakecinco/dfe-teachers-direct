import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import FormPage from './components/FormPage';
import UserProfile from './components/UserProfileForm';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register"><FormPage /></Route>
          <Route path="/userprofile"><UserProfile /></Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
