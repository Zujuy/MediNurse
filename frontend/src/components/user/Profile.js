import React, {Component} from "react";
import {StyledProfile, StyledNurse, Carousel, StyledCard} from "../../style/Components";
import PatientCards from "../patient/PatientCards";
import {Link} from "react-router-dom";

export default function Profile (){
    return(
    
    <StyledProfile>
    <div className="containerprofile">
    <img src="../../../uniformes-de-enfermera-indumentaria-para-el-cuidado-de-la-salud.jpg"/>
    <h3>Mariel Blanco</h3>
    <h5>Role: Jefe de enfermeras</h5>
    <p>Teléfono: 1526 2374</p>
    <p>Hospital: Siglo XXI</p>
    <p>Especialidad: Otorrinolaringología</p>
    <p>Cédula: 1243579</p>
    <p>matrícula: 11789300</p>
    </div>


    <div className="profileButtons">
    <button>ver todos los usuarios</button> {/*esto dirige al componente "allusers" aparece en perfil solo de servicio social  */}

    {/*estos botones solo son para perfil Asistente medica */}
    <button>Dar de alta paciente</button>  {/*linkeado a formulario alta paciente */}
    <br></br>
    <button>Crear cita médica</button> {/*linkeado a formulario calendario */}

    {/*estos botones solo son para perfil medico */}
    <button>Crear expediente médico</button> {/*linkeado a formulario componente "Patientform" */}
    <br></br>
    <button>Ver historial pacientes</button> {/*linkeado a solo los pacientes relacionados al ID del medico  componente "PatientsAsigned"*/}
    
    {/* estos botones solo son para perfil jefe de enfermeras */}
    <button>Ver Enfermeras</button> {/*linkeado a all nurses con el id de esa jefa de enfermeras componente "AllNurses"*/}
    <br></br>
    <button>Ver pacientes</button> {/*linkeado a solo los pacientes relacionados al ID del jefa de enfermeras componente "PatientsAsigned" */}
    </div>

    {/* AQUI FALTA LA VISTA DE EL PERFIL DE ENFERMERAS DEL LADO DERECHO */}
    
    </StyledProfile>
  
    )
}