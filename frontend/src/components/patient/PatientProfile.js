import React, {Component} from "react";
import {StyledPatientprofile} from "../../style/Components";
import {Link} from "react-router-dom";

export default function Profile (){
    return(
    
    <StyledPatientprofile>
    <div className="containerprofile">
    <img src="../../../patiente.jpg"/>
    <h3>Jorge Rodríguez</h3>
    <h5>Activo</h5>
    </div>
    

    
    <div className="containerinfo">
    <h3>Información del paciente</h3>
    <ul>
    <li>Diagnóstico: Diabetes mellitus tipo2</li>
    <li>Hospital: Siglo XXI</li>
    <li>Especialidad: Endocrinología</li>
    <li>Laboratorios: Azucar, presion arterial, química sanguinea 36 elementos</li>
    <li>Edad: 78 años</li>
    <li>Dirección:norte 87, Mártirez de Rio Blanco, Ciudad de México</li>
    <li>familiar de contacto: Mariana Jiménez</li>
    <li>Número de seguridad social: 00034679</li>
    <li>tipo de sangre: RH A+</li>
    <li>Género: Masculino</li>
    <li>Alergias: Penicilina</li>
    <li>Peso: 97.300 kg</li>
    <li>Estatura: 179 cm</li>
    </ul>

    <button>Ver hoja de enfermería</button>

    </div>
    </StyledPatientprofile>
    
    )}