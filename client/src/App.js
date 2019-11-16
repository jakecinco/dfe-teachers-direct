import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
//import JobsForm from './components/JobsForm'
import FormPage from './components/FormPage';
import UserProfile from './components/UserProfileForm';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register"><FormPage /></Route>
          <Route path="/userprofile"><UserProfile /></Route>
        </Switch>
    </Router >
    </div>
  );
}

export default App;
