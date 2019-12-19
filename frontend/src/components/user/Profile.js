import React, { Component } from 'react';
import {
  StyledProfile,
  StyledNurse,
  Carousel,
  StyledCard
} from '../../style/Components';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context';
import AUTH_SERVICE from '../../services/AuthService';

export default class Profile extends Component {
  state = {
    currentUser: {}
  };

  componentDidMount() {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ currentUser: data.user });
        })
        .catch(err => console.log(err));
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <StyledProfile>
              <div className="containerprofile">
                <img src={this.state.currentUser.photo} />
                <h3>{this.state.currentUser.name}</h3>
                <h5>Role: {this.state.currentUser.role}</h5>
                <p>Teléfono: {this.state.currentUser.phone}</p>
                <p>Hospital: {this.state.currentUser.hospital}</p>
                <p>Especialidad: {this.state.currentUser.especiality}</p>
                <p>Cédula: {this.state.currentUser.identification_card}</p>
                <p>matrícula: {this.state.currentUser.enrollment}</p>
              </div>

              <div className="profilelinks">
                {this.state.currentUser.role === 'Servicio Social' && (
                  <Link style={{ textDecoration: 'none' }} to="/allusers">
                    <h4>ver todos los usuarios</h4>
                  </Link>
                )}

                {this.state.currentUser.role === 'Asistente medica' && (
                  <Link style={{ textDecoration: 'none' }} to="/patientform">
                    <h4>Dar de alta paciente</h4>
                  </Link>
                )}
                <br></br>
                {this.state.currentUser.role === 'Asistente medica' && (
                  <Link style={{ textDecoration: 'none' }} to="/home">
                   <h4>Crear cita médica</h4> 
                  </Link>
                )}

                {this.state.currentUser.role === 'Medico' && (
                  <Link style={{ textDecoration: 'none' }} to="/patientform">
                    <h4>Crear expediente médico</h4>
                  </Link>
                )}
                <br></br>
                {this.state.currentUser.role === 'Medico' && (
                  <Link
                    style={{ textDecoration: 'none' }}
                    to="/patientsasigned"
                  >
                    <h4>Ver historial pacientes</h4>
                  </Link>
                )}

                {this.state.currentUser.role === 'Jefe enfermeros' && (
                  <Link style={{ textDecoration: 'none' }} to="/allnurses">
                    <h4>Ver Enfermeras</h4>
                  </Link>
                )}
                <br></br>
                {this.state.currentUser.role === 'Jefe enfermeros' && (
                  <Link
                    style={{ textDecoration: 'none' }}
                    to="/patientsasigned"
                  >
                   <h4>Ver pacientes</h4> 
                  </Link>
                )}

                {this.state.currentUser.role === 'Enfermera' && (
                  <Link
                    style={{ textDecoration: 'none' }}
                    to="/patientsAsigned"
                  >
                   <h4>Ver pacientes</h4>
                  </Link>
                )}
              </div>
            </StyledProfile>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

Profile.contextType = MyContext;
