import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup"

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact component={Home} path="/home" />
      <Route exact component={Signup} path="/signup" />
      <Route exact component={Login} path="/login" />
      {/* aqui va logout */}
    </Switch>
  </BrowserRouter>
);

export default Router;
