import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/user/Profile';
import AllUsers from "./components/user/AllUsers";

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <link rel="stylesheet"></link>
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/allusers" component ={AllUsers}/>

    </Switch>
  </BrowserRouter>
);

export default Router;
