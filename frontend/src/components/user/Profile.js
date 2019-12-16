import React, {Component} from "react";
import {StyledProfile, StyledNurse, Carousel} from "../../style/Components";

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
    <button>ver todos los usuarios</button> {/*esto dirige al la vista allusers aparece en perfil solo de servicio social  */}

    {/*estos botones solo son para perfil Asistente medica */}
    <button>Dar de alta paciente</button> 
    <br></br>
    <button>Crear cita médica</button>

    {/*estos botones solo son para perfil medico */}
    <button>Crear expediente médico</button>
    <br></br>
    <button>Ver historial pacientes</button>
    
    {/* estos botones solo son para perfil jefe de enfermeras */}
    <button>Ver Enfermeras</button>
    <br></br>
    <button>Ver pacientes</button>
    </div>

{/* esta es la parte derecha delperfil de enfermeras */}
    <div className="NurseSeeing">
        <StyledNurse>
        <Carousel>

        </Carousel>

        </StyledNurse>
    </div>

    
    </StyledProfile>
  
    )
}