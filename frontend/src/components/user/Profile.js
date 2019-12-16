import React, {Component} from "react";
import {StyledProfile} from "../../style/Components";

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
    <button>Ver Enfermeras</button>
    <br></br>
    <button>Ver pacientes</button>
    </div>

    
    </StyledProfile>
  
    )
}