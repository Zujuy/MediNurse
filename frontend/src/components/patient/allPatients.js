import React, {Component} from "react";
import {StyledPatients, StyledCard, Carousel} from "../../style/Components";
import PatientCards from "../../components/patient/PatientCards";

export default function AllPatients(){
    return(
        <StyledPatients>
        <h2>Pacientes activos</h2>
        <div className="allpatients">
        <StyledCard>
        <Carousel>
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
          
        </Carousel>
        </StyledCard>
        </div>

        </StyledPatients>
    )
}