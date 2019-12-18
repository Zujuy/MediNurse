import React, { Component } from 'react';
import {StyledProfile, StyledNurse, Carousel, StyledCard} from '../../style/Components';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context';
import AUTH_SERVICE from '../../services/AuthService';

export default class Profile extends Component {
  state = {
    currentUser: {}
  };

  componentDidMount() {
    if (document.cookie)
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

              <div className="profileButtons">
                <button>ver todos los usuarios</button>
                {/*esto dirige al componente "allusers" aparece en perfil solo de servicio social  */}
                {/*estos botones solo son para perfil Asistente medica */}
                <button>Dar de alta paciente</button>
                {/*linkeado a formulario alta paciente */}
                <br></br>
                <button>Crear cita médica</button>
                {/*linkeado a formulario calendario */}
                {/*estos botones solo son para perfil medico */}
                <button>Crear expediente médico</button>
                {/*linkeado a formulario componente "Patientform" */}
                <br></br>
                <button>Ver historial pacientes</button>
                {/*linkeado a solo los pacientes relacionados al ID del medico  componente "PatientsAsigned"*/}
                {/* estos botones solo son para perfil jefe de enfermeras */}
                <button>Ver Enfermeras</button>
                {/*linkeado a all nurses con el id de esa jefa de enfermeras componente "AllNurses"*/}
                <br></br>
                <button>Ver pacientes</button>
                {/*linkeado a solo los pacientes relacionados al ID del jefa de enfermeras componente "PatientsAsigned" */}
              </div>

              {/* AQUI FALTA LA VISTA DE EL PERFIL DE ENFERMERAS DEL LADO DERECHO */}
            </StyledProfile>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

Profile.contextType = MyContext;
