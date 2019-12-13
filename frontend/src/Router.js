import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Profile from './components/user/Profile'

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact component={Home} path="/home" />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile}/>
      
    </Switch>
  </BrowserRouter>
);

export default Router;
