import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/user/Profile';
import AllUsers from "./components/user/AllUsers";
import AllPatients from "./components/patient/AllPatients";
import AllNurses from "./components/user/AllNurses";
import PatientsAsigned from "./components/user/PatientsAsigned";
import Patientform from "./components/patient/Patientform";
import PatientProfile from "./components/patient/PatientProfile";
// import PatientData from "./components/organicComponents/NurseSheetForm/PatientData";
// import MedicalData from "./components/organicComponents/NurseSheetForm/MedicalData";
// import MedicalScales from "./components/organicComponents/NurseSheetForm/MedicalScales";
// import FunctionalPatterns from "./components/organicComponents/NurseSheetForm/FunctionalPatterns";


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
      <Route exact path="/allpatients" component ={AllPatients}/>
      <Route exact path="/allnurses" component ={AllNurses}/>
      <Route exact path="/patientsAsigned" component ={PatientsAsigned}/>
      <Route exact path="/patientform" component ={Patientform}/>
      <Route exact path="/patientprofile" component ={PatientProfile}/>
      {/* <Route exact path="/patientdata" component ={PatientData}/>
      <Route exact path="/medicaldata" component ={MedicalData}/>
      <Route exact path="/medicalsacales" component ={MedicalScales}/>
      <Route exact path="/functionalpatterns" component ={FunctionalPatterns}/> */}

      

      
    </Switch>
  </BrowserRouter>
);

export default Router;
