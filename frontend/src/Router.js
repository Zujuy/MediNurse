import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";


const Signup = () => <h1>Signup</h1>;

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Signup} path="/signup" />
      <Route exact component={Login} path="/login" />
      {/* aqui va logout */}
    </Switch>
  </BrowserRouter>
);

export default Router;
